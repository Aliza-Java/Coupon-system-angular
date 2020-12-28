import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AllCouponsComponent = class AllCouponsComponent {
    constructor(companyService, loginService, httpClient) {
        this.companyService = companyService;
        this.loginService = loginService;
        this.httpClient = httpClient;
        //This is by default the message appearing if no coupons exist (different selects will change this message appropriately)
        this.emptyListMessage = "coupons for your company.";
    }
    ngOnInit() {
        this.companyService.getAllCoupons();
    }
    selectAllCoupons() {
        this.emptyListMessage = "coupons for your company.";
        this.companyService.getAllCoupons();
    }
    selectByPrice() {
        this.emptyListMessage = "coupons under this price.";
        this.companyService.selectByPrice(this.byPrice);
    }
    selectByCategory() {
        this.emptyListMessage = "coupons in this category.";
        this.companyService.selectByCategory(this.byCategory);
    }
    selectByDate() {
        this.emptyListMessage = "coupons before this date.";
        this.companyService.selectByDate(this.byDate);
    }
};
AllCouponsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-all-coupons',
        templateUrl: './all-coupons.component.html',
        styleUrls: ['./all-coupons.component.css']
    })
], AllCouponsComponent);
export { AllCouponsComponent };
//# sourceMappingURL=all-coupons.component.js.map