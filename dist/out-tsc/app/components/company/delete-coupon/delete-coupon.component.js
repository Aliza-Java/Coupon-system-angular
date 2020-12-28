import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DeleteCouponComponent = class DeleteCouponComponent {
    constructor(companyService) {
        this.companyService = companyService;
    }
    ngOnInit() {
        this.companyService.getAllCoupons();
    }
};
DeleteCouponComponent = tslib_1.__decorate([
    Component({
        selector: 'app-delete-coupon',
        templateUrl: './delete-coupon.component.html',
        styleUrls: ['./delete-coupon.component.css']
    })
], DeleteCouponComponent);
export { DeleteCouponComponent };
//# sourceMappingURL=delete-coupon.component.js.map