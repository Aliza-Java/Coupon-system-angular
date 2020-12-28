import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let GetCompanyComponent = class GetCompanyComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        //To populate dropdown
        this.adminService.getAllCompanies();
        //in order to prevent empty choice.
        this.companyId = this.adminService.allCompanies[0].id;
    }
};
GetCompanyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-get-company',
        templateUrl: './get-company.component.html',
        styleUrls: ['./get-company.component.css']
    })
], GetCompanyComponent);
export { GetCompanyComponent };
//# sourceMappingURL=get-company.component.js.map