import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DeleteCompanyComponent = class DeleteCompanyComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        //To populate dropdown
        this.adminService.getAllCompanies();
    }
};
DeleteCompanyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-delete-company',
        templateUrl: './delete-company.component.html',
        styleUrls: ['./delete-company.component.css']
    })
], DeleteCompanyComponent);
export { DeleteCompanyComponent };
//# sourceMappingURL=delete-company.component.js.map