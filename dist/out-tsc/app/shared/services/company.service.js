import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CouponCategory } from '../models/couponCategory';
let CompanyService = class CompanyService {
    constructor(httpClient, loginService) {
        this.httpClient = httpClient;
        this.loginService = loginService;
        //baseUrl: string = "http://localhost:5000/CouponSystem/sec/company/";
        this.baseUrl = "http://CouponService-env.eba-s7cz5xcc.us-east-1.elasticbeanstalk.com/CouponSystem/sec/company/";
        this.errorMessage = "";
        //initializing categories array with categories.
        var categories = Object.keys(CouponCategory);
        //selecting category values from category array 
        var from = Math.trunc(categories.length / 2);
        var to = from * 2;
        this.categories = categories.slice(from, to);
        this.emptyList = false;
        this.httpClient.get(`${this.baseUrl}details/${this.loginService.user.id}`, { withCredentials: true })
            .subscribe(res => this.currentCompany = res, err => console.log(err.error.messages));
    }
    resetMessages() {
        this.resultMessage = "";
        this.errorMessage = "";
        this.couponToGet = null;
        this.emptyList = false;
    }
    //will load company into currentCompany, e.g. on start of company home
    getCompany() {
        this.httpClient.get(`${this.baseUrl}details/${this.loginService.user.id}`, { withCredentials: true })
            .subscribe(res => this.currentCompany = res, err => this.errorMessage = err.error.messages);
    }
    getAllCoupons() {
        //fill in allCoupons as full data, and selectedCoupons since all-coupons.html draws on it in *ngFor.
        this.httpClient.get(this.baseUrl, { withCredentials: true })
            .subscribe(res => {
            this.allCoupons = res;
            this.selectedCoupons = res;
        }, err => this.errorMessage = err.error.messages);
    }
    createCoupon(newCoupon) {
        this.httpClient.post(`${this.baseUrl}createcoupon`, newCoupon, { withCredentials: true })
            .subscribe(res => this.resultMessage = `Coupon with id ${res.id} created successfully!`, err => console.log(err.error.messages));
    }
    findCouponNow(id) {
        this.httpClient.get(`${this.baseUrl}coupon/${id}`, { withCredentials: true })
            .subscribe(res => this.couponToGet = res, err => console.log(err.error.messages));
    }
    updateCoupon(couponToUpdate) {
        this.httpClient.put(`${this.baseUrl}updatecoupon/${couponToUpdate.id}`, couponToUpdate, { withCredentials: true })
            .subscribe(res => alert(`Coupon ${couponToUpdate.id} updated successfully!`), err => this.errorMessage = err.error.messages);
    }
    deleteCoupon(id) {
        if (confirm(`Are you sure you want to delete coupon ${id}?`)) {
            this.httpClient.delete(`${this.baseUrl}removecoupon/${id}`, { withCredentials: true })
                .subscribe(res => {
                alert(`Coupon ${id} deleted successfully.`);
                this.getAllCoupons(); //update table with updated list of existing coupons
            }, err => {
                alert("Unable to delete.  ");
                this.getAllCoupons(); //the dropdown should still be updated with existing coupons
            });
        }
        else {
            //allow user to change his mind.
        }
    }
    selectByPrice(price) {
        this.selectedCoupons = [];
        this.httpClient.get(this.baseUrl + `byPrice/${price}`, { withCredentials: true })
            .subscribe(res => this.selectedCoupons = res, err => console.log(err.error.messages));
    }
    selectByCategory(category) {
        this.selectedCoupons = [];
        this.httpClient.get(this.baseUrl + `category/${category}`, { withCredentials: true })
            .subscribe(res => this.selectedCoupons = res, err => console.log(err.error.messages));
    }
    selectByDate(date) {
        this.selectedCoupons = [];
        this.httpClient.get(this.baseUrl + `beforeDate/${date}`, { withCredentials: true })
            .subscribe(res => this.selectedCoupons = res, err => console.log(err.error.messages));
    }
};
CompanyService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CompanyService);
export { CompanyService };
//# sourceMappingURL=company.service.js.map