import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UpdateCouponComponent = class UpdateCouponComponent {
    constructor(companyService, httpClient) {
        this.companyService = companyService;
        this.httpClient = httpClient;
        this.wasChange = false;
        this.couponExpired = false;
        this.backwardDates = false;
    }
    ngOnInit() {
        this.companyService.getAllCoupons(); //for dropdown
        this.couponId = this.companyService.allCoupons[0].id; //To initialize drop down
    }
    fillCouponDetails() {
        this.httpClient.get(`${this.companyService.baseUrl}coupon/${this.couponId}`, { withCredentials: true })
            .subscribe(res => { this.couponToUpdate = res; }, err => alert(err.error.messages));
    }
    submitChanges() {
        //Assigning current company to coupon
        this.couponToUpdate.company = this.companyService.currentCompany;
        this.companyService.updateCoupon(this.couponToUpdate);
    }
    enableSubmit() {
        this.wasChange = true;
    }
    checkDates() {
        if (this.couponToUpdate.endDate) { //will only enter checks if an end date has been entered
            let today = new Date().toISOString().split('T')[0];
            if (this.couponToUpdate.endDate < today) { //end date has expired
                this.couponExpired = true;
            }
            else
                this.couponExpired = false; //if user fixed it
            if (this.couponToUpdate.endDate < this.couponToUpdate.startDate) { //end date before start date
                this.backwardDates = true;
            }
            else
                this.backwardDates = false; //if user fixed it
        }
    }
};
UpdateCouponComponent = tslib_1.__decorate([
    Component({
        selector: 'app-update-coupon',
        templateUrl: './update-coupon.component.html',
        styleUrls: ['./update-coupon.component.css']
    })
], UpdateCouponComponent);
export { UpdateCouponComponent };
//# sourceMappingURL=update-coupon.component.js.map