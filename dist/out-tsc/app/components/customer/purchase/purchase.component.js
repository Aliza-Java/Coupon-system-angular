import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let PurchaseComponent = class PurchaseComponent {
    constructor(customerService) {
        this.customerService = customerService;
    }
    ngOnInit() {
        this.customerService.getAvailableCoupons();
    }
};
PurchaseComponent = tslib_1.__decorate([
    Component({
        selector: 'app-purchase',
        templateUrl: './purchase.component.html',
        styleUrls: ['./purchase.component.css']
    })
], PurchaseComponent);
export { PurchaseComponent };
//# sourceMappingURL=purchase.component.js.map