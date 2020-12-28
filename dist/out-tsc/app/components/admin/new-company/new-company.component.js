import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let NewCompanyComponent = class NewCompanyComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
    }
    send() {
        this.adminService.createNewCompany(this.newName, this.newPassword, this.newEmail);
    }
    again() {
        //refresh everything and start again.
        this.newName = "";
        this.newPassword = "";
        this.newEmail = "";
        this.adminService.resultMessage = "";
    }
};
NewCompanyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-new-company',
        templateUrl: './new-company.component.html',
        styleUrls: ['./new-company.component.css']
    })
], NewCompanyComponent);
export { NewCompanyComponent };
//# sourceMappingURL=new-company.component.js.map