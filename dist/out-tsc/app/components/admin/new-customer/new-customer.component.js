import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let NewCustomerComponent = class NewCustomerComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        //resetting variables if this component is re-entered.
        this.newName = "";
        this.newPassword = "";
    }
    send() {
        this.adminService.createNewCustomer(this.newName, this.newPassword);
    }
    again() {
        //refresh all to send a new customer
        this.newName = "";
        this.newPassword = "";
        this.adminService.resultMessage = "";
    }
};
NewCustomerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-new-customer',
        templateUrl: './new-customer.component.html',
        styleUrls: ['./new-customer.component.css']
    })
], NewCustomerComponent);
export { NewCustomerComponent };
//# sourceMappingURL=new-customer.component.js.map