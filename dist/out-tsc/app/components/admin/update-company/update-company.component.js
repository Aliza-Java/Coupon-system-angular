import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UpdateCompanyComponent = class UpdateCompanyComponent {
    constructor(adminService, httpClient) {
        this.adminService = adminService;
        this.httpClient = httpClient;
        this.wasChange = false;
    }
    ngOnInit() {
        this.adminService.getAllCompanies(); //filling in for the select options.
        this.wasChange = false;
        //in order to prevent empty choice.
        this.companyId = this.adminService.allCompanies[0].id;
    }
    fillCompanyDetails() {
        this.httpClient.get(`${this.adminService.baseUrl}company/${this.companyId}`, { withCredentials: true })
            .subscribe(res => { this.companyToUpdate = res; this.wasChange = false; }, err => console.log(err.error.messages));
    }
    submitChanges() {
        this.adminService.updateCompany(this.companyToUpdate);
        this.wasChange = false;
    }
    //disabling submit button until user actually enters/deletes something in form.
    enableSubmit() {
        this.wasChange = true;
    }
};
UpdateCompanyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-update-company',
        templateUrl: './update-company.component.html',
        styleUrls: ['./update-company.component.css']
    })
], UpdateCompanyComponent);
export { UpdateCompanyComponent };
//# sourceMappingURL=update-company.component.js.map