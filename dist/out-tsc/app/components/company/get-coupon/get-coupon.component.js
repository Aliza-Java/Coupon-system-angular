import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let GetCouponComponent = class GetCouponComponent {
    constructor(companyService) {
        this.companyService = companyService;
    }
    ngOnInit() {
        this.companyService.getAllCoupons(); //for dropdown
        this.couponId = this.companyService.allCoupons[0].id; //To initialize drop down
    }
};
GetCouponComponent = tslib_1.__decorate([
    Component({
        selector: 'app-get-coupon',
        templateUrl: './get-coupon.component.html',
        styleUrls: ['./get-coupon.component.css']
    })
], GetCouponComponent);
export { GetCouponComponent };
//# sourceMappingURL=get-coupon.component.js.map