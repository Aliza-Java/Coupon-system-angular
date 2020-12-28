import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CompanyHomeComponent = class CompanyHomeComponent {
    constructor(companyService, loginService) {
        this.companyService = companyService;
        this.loginService = loginService;
    }
    ngOnInit() {
        this.todayDate = new Date();
        this.companyService.getCompany();
    }
};
CompanyHomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-company-home',
        templateUrl: './company-home.component.html',
        styleUrls: ['./company-home.component.css']
    })
], CompanyHomeComponent);
export { CompanyHomeComponent };
//# sourceMappingURL=company-home.component.js.map