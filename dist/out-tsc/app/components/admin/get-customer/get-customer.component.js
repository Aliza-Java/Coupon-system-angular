import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let GetCustomerComponent = class GetCustomerComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        //To populate dropdown
        this.adminService.getAllCustomers();
        //in order to prevent empty choice.
        this.customerId = this.adminService.allCustomers[0].id;
    }
};
GetCustomerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-get-customer',
        templateUrl: './get-customer.component.html',
        styleUrls: ['./get-customer.component.css']
    })
], GetCustomerComponent);
export { GetCustomerComponent };
//# sourceMappingURL=get-customer.component.js.map