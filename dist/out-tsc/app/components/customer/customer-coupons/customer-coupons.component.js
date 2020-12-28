import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CouponCategory } from 'src/app/shared/models/couponCategory';
let CustomerCouponsComponent = class CustomerCouponsComponent {
    constructor(customerService) {
        this.customerService = customerService;
        //Message to appear if select gives on coupons.  By default user selects all coupons.  
        this.emptyListMessage = "coupons that belong to you.";
        //initializing categories array with categories.
        var categories = Object.keys(CouponCategory);
        this.categories = categories.slice(categories.length / 2);
    }
    ngOnInit() {
        this.customerService.getAllMyCoupons();
    }
    selectByCategory() {
        this.emptyListMessage = "of your coupons in this category.";
        this.byPrice = null; //making it visually clear to user that selection is by category only
        this.customerService.selectByCategory(this.byCategory);
    }
    selectAll() {
        this.emptyListMessage = "coupons that belong to you.";
        this.customerService.getAllMyCoupons();
    }
    selectByPrice() {
        this.emptyListMessage = "of your coupons under this price.";
        this.byCategory = null; //making it visually clear to user that selection is by price only
        this.customerService.selectByPrice(this.byPrice);
    }
};
CustomerCouponsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-customer-coupons',
        templateUrl: './customer-coupons.component.html',
        styleUrls: ['./customer-coupons.component.css']
    })
], CustomerCouponsComponent);
export { CustomerCouponsComponent };
//# sourceMappingURL=customer-coupons.component.js.map