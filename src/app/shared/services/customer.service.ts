import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { LoginService } from './login.service';
import { Coupon } from '../models/coupon';
import { CouponCategory } from '../models/couponCategory';
import { Router } from '@angular/router';
import { LoginType } from '../models/loginType';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {


    baseUrl: string;

    currentCustomer: Customer;
    customerCoupons: Coupon[];
    selectedCoupons: Coupon[];
    availableCoupons: Coupon[];
    resultMessage: string;
    categories: string[];

    constructor(public errorService: ErrorService, public httpClient: HttpClient, public loginService: LoginService, public router: Router) {

        this.baseUrl = this.loginService.host + 'sec/customer/';
        this.errorService.updateErrorMessage.next("");

        //initializing categories array with categories.
        var categories = Object.keys(CouponCategory);

        //selecting category values from category array 
        var from = Math.trunc(categories.length / 2);
        var to = from * 2;
        this.categories = categories.slice(from, to);
        this.resultMessage = "";
    }

    resetMessages() {
        this.errorService.updateErrorMessage.next("");
        this.resultMessage = "";
    }

    getCustomerDetails(): void {
        this.httpClient.get<Customer>(`${this.baseUrl}details`, { withCredentials: true })
            .subscribe(res => {
                this.errorService.updateErrorMessage.next("");
                this.currentCustomer = res;
            }, err => {
                this.errorService.updateErrorMessage.next(`Unable to load customer details. ` + this.errorService.extractError(err));
            });
    }

    getAllMyCoupons() {
        this.httpClient.get<Coupon[]>(this.baseUrl, { withCredentials: true })
            .subscribe(res => {
                this.errorService.updateErrorMessage.next("");
                this.customerCoupons = res;
                this.selectedCoupons = res;
            }, err => {
                this.errorService.updateErrorMessage.next(`Unable to load your coupons. ` + this.errorService.extractError(err));
            });
    }

    getAvailableCoupons(): void {
        this.httpClient.get<Coupon[]>(`${this.baseUrl}availablecoupons`, { withCredentials: true })
            .subscribe(res => {
                this.errorService.updateErrorMessage.next("");
                this.availableCoupons = res;
            }, err => {
                this.errorService.updateErrorMessage.next(`Unable to load available coupons. ` + this.errorService.extractError(err));
            });
    }

    purchase(couponId: number) {
        this.resultMessage = ""; //clear up if user purchased before.
        if (confirm(`Are you sure you want to purchase coupon ${couponId}?`)) {
            this.httpClient.post(`${this.baseUrl}purchase/${couponId}`, null, { withCredentials: true, responseType: 'json' })
                .subscribe(() => {
                    this.errorService.updateErrorMessage.next("");
                    this.resultMessage = `Coupon of id ${couponId} purchased successfully.`;
                    this.getAvailableCoupons();
                },
                    err => {
                        this.errorService.updateErrorMessage.next(`Unable to complete coupon purchase. ` + this.errorService.extractError(err));
                    });
        }
    }


    selectByPrice(price: number) {
        this.httpClient.get<Coupon[]>(this.baseUrl + `byprice/${price}`, { withCredentials: true })
            .subscribe(res => {
                this.errorService.updateErrorMessage.next("");
                this.selectedCoupons = res;
            }, err => {
                this.errorService.updateErrorMessage.next(`Unable to select coupons by price. ` + this.errorService.extractError(err));
            });
    }

    selectByCategory(category: CouponCategory) {
        this.httpClient.get<Coupon[]>(this.baseUrl + `bycategory/${category}`, { withCredentials: true })
            .subscribe(res => {
                this.errorService.updateErrorMessage.next("");
                this.selectedCoupons = res;
            }, err => {
                this.errorService.updateErrorMessage.next(`Unable to load coupons by category. ` + this.errorService.extractError(err));
            });
    }

    checkCustomer() {
        if (this.loginService.user.type != LoginType.CUSTOMER) {
            this.loginService.forceLogout();
        }
    }

}
