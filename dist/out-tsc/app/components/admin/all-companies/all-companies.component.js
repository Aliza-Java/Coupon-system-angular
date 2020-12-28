import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AllCompaniesComponent = class AllCompaniesComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        this.adminService.getAllCompanies();
    }
};
AllCompaniesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-all-companies',
        templateUrl: './all-companies.component.html',
        styleUrls: ['./all-companies.component.css']
    })
], AllCompaniesComponent);
export { AllCompaniesComponent };
//# sourceMappingURL=all-companies.component.js.map