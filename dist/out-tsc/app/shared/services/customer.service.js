import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CouponCategory } from '../models/couponCategory';
let CustomerService = class CustomerService {
    constructor(httpClient, loginService) {
        this.httpClient = httpClient;
        this.loginService = loginService;
        //baseUrl: string = "http://localhost:5000/CouponSystem/sec/customer/";
        this.baseUrl = "http://CouponService-env.eba-s7cz5xcc.us-east-1.elasticbeanstalk.com/CouponSystem/sec/customer/";
        //initializing categories array with categories.
        var categories = Object.keys(CouponCategory);
        //selecting category values from category array 
        var from = Math.trunc(categories.length / 2);
        var to = from * 2;
        this.categories = categories.slice(from, to);
        this.errorMessage = "";
        this.resultMessage = "";
    }
    resetMessages() {
        this.errorMessage = "";
        this.resultMessage = "";
    }
    getCustomerDetails() {
        this.httpClient.get(`${this.baseUrl}details/`, { withCredentials: true })
            .subscribe(res => this.currentCustomer = res, err => this.errorMessage = err.error.messages);
    }
    getAllMyCoupons() {
        this.httpClient.get(this.baseUrl, { withCredentials: true })
            .subscribe(res => { this.customerCoupons = res; this.selectedCoupons = res; }, err => this.errorMessage = `We could not retrieve your coupons. ${err.error.messages}`);
    }
    getAvailableCoupons() {
        this.httpClient.get(`${this.baseUrl}availablecoupons`, { withCredentials: true })
            .subscribe(res => this.availableCoupons = res, err => this.errorMessage = `We could not retrieve the list of coupons. ${err.error.messages}`);
    }
    purchase(couponId) {
        this.resultMessage = ""; //clear up if user purchased before.
        if (confirm(`Are you sure you want to purchase coupon ${couponId}?`)) {
            this.httpClient.post(`${this.baseUrl}purchase/${couponId}`, null, { withCredentials: true, responseType: 'json' })
                .subscribe(res => {
                this.resultMessage = `Coupon of id ${couponId} purchased successfully.`;
                this.getAvailableCoupons();
            }, err => alert(err.error.messages));
        }
    }
    selectByPrice(price) {
        this.httpClient.get(this.baseUrl + `byprice/${price}`, { withCredentials: true })
            .subscribe(res => this.selectedCoupons = res, err => alert(err.error.messages));
    }
    selectByCategory(category) {
        this.httpClient.get(this.baseUrl + `bycategory/${category}`, { withCredentials: true })
            .subscribe(res => this.selectedCoupons = res, err => alert(err.error.messages));
    }
};
CustomerService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CustomerService);
export { CustomerService };
//# sourceMappingURL=customer.service.js.map