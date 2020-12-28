import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Coupon } from 'src/app/shared/models/coupon';
let NewCouponComponent = class NewCouponComponent {
    constructor(companyService) {
        this.companyService = companyService;
        this.today = new Date().toISOString().split('T')[0]; //for later comparison of end date.
        this.backwardDates = false;
        this.couponExpired = false;
    }
    ngOnInit() {
        this.newCoupon = new Coupon();
    }
    checkBothDates() {
        if (this.newCoupon.endDate) { //check if end date is before today
            if (this.newCoupon.endDate < this.today) {
                this.couponExpired = true;
            }
            else
                this.couponExpired = false; //if user fixed it
            if (this.newCoupon.startDate) { //will only get checked if both dates are entered (comparison)
                if (this.newCoupon.endDate < this.newCoupon.startDate) { //end date before start date
                    this.backwardDates = true;
                }
                else
                    this.backwardDates = false; //if user fixed it
            }
        }
    }
    createNewCoupon() {
        //Assigning this company to coupon.
        this.newCoupon.company = this.companyService.currentCompany;
        this.companyService.createCoupon(this.newCoupon);
    }
    again() {
        this.newCoupon = new Coupon();
        this.companyService.resultMessage = "";
    }
};
NewCouponComponent = tslib_1.__decorate([
    Component({
        selector: 'app-new-coupon',
        templateUrl: './new-coupon.component.html',
        styleUrls: ['./new-coupon.component.css']
    })
], NewCouponComponent);
export { NewCouponComponent };
//# sourceMappingURL=new-coupon.component.js.map