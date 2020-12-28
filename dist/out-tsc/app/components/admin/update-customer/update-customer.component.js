import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UpdateCustomerComponent = class UpdateCustomerComponent {
    constructor(adminService, httpClient) {
        this.adminService = adminService;
        this.httpClient = httpClient;
        this.wasChange = false;
        //in order to prevent empty choice.
        this.customerId = this.adminService.allCustomers[0].id;
    }
    ngOnInit() {
        this.adminService.getAllCustomers(); //filling in for the select options.
        this.wasChange = false;
    }
    fillCustomerDetails() {
        this.httpClient.get(`${this.adminService.baseUrl}customer/${this.customerId}`, { withCredentials: true })
            .subscribe(res => {
            this.customerToUpdate = res;
            this.wasChange = false; //disabling the submit button (unless changes are made)
        }, err => console.log(err.error.messages));
    }
    submitChanges() {
        this.adminService.updateCustomer(this.customerToUpdate);
        this.wasChange = false; //disabling the submit button for next time (until new changes are made)
    }
    //disabling submit button until user actually enters/deletes something in form.
    enableSubmit() {
        this.wasChange = true;
    }
};
UpdateCustomerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-update-customer',
        templateUrl: './update-customer.component.html',
        styleUrls: ['./update-customer.component.css']
    })
], UpdateCustomerComponent);
export { UpdateCustomerComponent };
//# sourceMappingURL=update-customer.component.js.map