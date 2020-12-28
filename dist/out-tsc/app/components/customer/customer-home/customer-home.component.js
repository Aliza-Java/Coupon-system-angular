import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CustomerHomeComponent = class CustomerHomeComponent {
    constructor(customerService) {
        this.customerService = customerService;
    }
    ngOnInit() {
        this.todayDate = new Date();
        this.customerService.getCustomerDetails();
    }
};
CustomerHomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-customer-home',
        templateUrl: './customer-home.component.html',
        styleUrls: ['./customer-home.component.css']
    })
], CustomerHomeComponent);
export { CustomerHomeComponent };
//# sourceMappingURL=customer-home.component.js.map