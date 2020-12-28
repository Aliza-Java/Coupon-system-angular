import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Coupon } from '../models/coupon';
import { LoginService } from './login.service';
import { CouponCategory } from '../models/couponCategory';
import { LoginType } from '../models/loginType';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {


    baseUrl: string;

error:boolean;
    allCoupons: Coupon[];
    selectedCoupons: Coupon[];
    couponToGet: Coupon;
    newCoupon: Coupon;
    currentCompany: Company;
    resultMessage: string;
    emptyList: boolean;
    categories: string[];

    public constructor(public errorService: ErrorService, public httpClient: HttpClient, public loginService: LoginService, public router: Router) {

        this.error = false;
        this.baseUrl = this.loginService.host + 'sec/company/';
        this.resultMessage = "";
        this.errorService.updateErrorMessage.next("");

        //initializing categories array with categories.
        var categories = Object.keys(CouponCategory);

        //selecting category values from category array 
        var from = Math.trunc(categories.length / 2);
        var to = from * 2;
        this.categories = categories.slice(from, to);

        this.emptyList = false;
        this.getCompany();
    }


    resetMessages() {//start anew every time a user clicks a router link.
        this.error = false;
        this.resultMessage = "";
        this.errorService.updateErrorMessage.next("");
        this.couponToGet = null;
        this.emptyList = false;
    }

    //will load company into currentCompany, e.g. on start of company home
    getCompany(): void {
        this.httpClient.get<Company>(`${this.baseUrl}details`, { withCredentials: true })
            .subscribe(res => {
                this.error = false;
                this.errorService.updateErrorMessage.next("");
                this.currentCompany = res;
            }, err => {
                this.error = true;
                this.errorService.updateErrorMessage.next(`Unable to load company details. ` + this.errorService.extractError(err));
            });
    }

    public getAllCoupons() {

        //fill in allCoupons as full data, and selectedCoupons since all-coupons.html draws on it in *ngFor.
        this.httpClient.get<Coupon[]>(this.baseUrl, { withCredentials: true })
            .subscribe(res => {
                this.error = false;
                this.errorService.updateErrorMessage.next("");
                this.allCoupons = res;
                this.selectedCoupons = res;
            },
                err => {
                    this.error = true;
                    this.errorService.updateErrorMessage.next(`Unable to load company coupons. ` + this.errorService.extractError(err));
                });
    }

    createCoupon(newCoupon: Coupon) {
        this.httpClient.post<Coupon>(`${this.baseUrl}createcoupon`, newCoupon, { withCredentials: true })
            .subscribe(res => {
                this.error = false;
                this.errorService.updateErrorMessage.next("");
                this.resultMessage = `Coupon with id ${res.id} created successfully!`;
            }, err => {
                this.error = true;
                this.errorService.updateErrorMessage.next(`Unable to create coupon. ` + this.errorService.extractError(err));
            });
    }

    public findCouponNow(id: number): void {
        this.httpClient.get<Coupon>(`${this.baseUrl}coupon/${id}`, { withCredentials: true })
            .subscribe(res => {
                this.error  = false; 
                this.errorService.updateErrorMessage.next("");
                this.couponToGet = res;
            }, err => {
                this.error = true; 
                this.errorService.updateErrorMessage.next(`Unable to load coupon of id ${id}. ` + this.errorService.extractError(err));
            });
    }

    updateCoupon(couponToUpdate: Coupon) {
        this.httpClient.put(`${this.baseUrl}updatecoupon/${couponToUpdate.id}`, couponToUpdate, { withCredentials: true })
            .subscribe(() => {
                this.error = false;
                this.errorService.updateErrorMessage.next("");
                alert(`Coupon ${couponToUpdate.id} updated successfully!`);
            }, err => {
                this.error = true;
                this.errorService.updateErrorMessage.next(`Unable to update coupon. ` + this.errorService.extractError(err));
            });
    }

    public deleteCoupon(id: number): void {
        if (confirm(`Are you sure you want to delete coupon ${id}?`)) {
            this.httpClient.delete(`${this.baseUrl}removecoupon/${id}`, { withCredentials: true })
                .subscribe(() => {
                    this.error = false;
                    this.errorService.updateErrorMessage.next("");
                    alert(`Coupon ${id} deleted successfully.`);
                    this.getAllCoupons(); //update table with updated list of existing coupons

                }, err => {
                    this.error = true;
                    this.errorService.updateErrorMessage.next("Unable to delete. " + this.errorService.extractError(err));
                    this.getAllCoupons(); //the dropdown should still be updated with existing coupons
                });
        } else {
            //allow user to change his mind.
        }
    }



    selectByPrice(price: number): void {
        this.selectedCoupons = [];
        this.httpClient.get<Coupon[]>(this.baseUrl + `byPrice/${price}`, { withCredentials: true })
            .subscribe(res => {
                this.error = false;
                this.errorService.updateErrorMessage.next("");
                this.selectedCoupons = res;
            },
                err => {
                    this.error = true; 
                    this.errorService.updateErrorMessage.next("Unable to load coupons by price. " + this.errorService.extractError(err));
                });
    }

    selectByCategory(category: CouponCategory): void {
        this.selectedCoupons = [];
        this.httpClient.get<Coupon[]>(this.baseUrl + `category/${category}`, { withCredentials: true })
            .subscribe(res => {
                this.error = false;
                this.errorService.updateErrorMessage.next("");
                this.selectedCoupons = res;
            },
                err => {
                    this.error = true;
                    this.errorService.updateErrorMessage.next(`Unable to load coupons by category. `+this.errorService.extractError(err));

                });
    }

    selectByDate(date: string): void {

        this.selectedCoupons = [];
        this.httpClient.get<Coupon[]>(this.baseUrl + `beforeDate/${date}`, { withCredentials: true })
            .subscribe(res => {
                this.error = false;
                this.errorService.updateErrorMessage.next("");
                this.selectedCoupons = res;
            },
                err => {
                    this.error = true;
                    this.errorService.updateErrorMessage.next("Unable to load coupons by date. "+this.errorService.extractError(err));
        });
    }

    checkCompany() {
        if (this.loginService.user.type != LoginType.COMPANY) {
            this.loginService.forceLogout();
        }
    }

}