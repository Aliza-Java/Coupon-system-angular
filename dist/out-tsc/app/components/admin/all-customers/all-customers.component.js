import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AllCustomersComponent = class AllCustomersComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        this.adminService.getAllCustomers();
    }
};
AllCustomersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-all-customers',
        templateUrl: './all-customers.component.html',
        styleUrls: ['./all-customers.component.css']
    })
], AllCustomersComponent);
export { AllCustomersComponent };
//# sourceMappingURL=all-customers.component.js.map