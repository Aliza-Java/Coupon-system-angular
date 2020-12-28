import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DeleteCustomerComponent = class DeleteCustomerComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        //To populate dropdown
        this.adminService.getAllCustomers();
    }
};
DeleteCustomerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-delete-customer',
        templateUrl: './delete-customer.component.html',
        styleUrls: ['./delete-customer.component.css']
    })
], DeleteCustomerComponent);
export { DeleteCustomerComponent };
//# sourceMappingURL=delete-customer.component.js.map