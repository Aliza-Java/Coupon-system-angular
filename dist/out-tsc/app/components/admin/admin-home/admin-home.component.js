import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AdminHomeComponent = class AdminHomeComponent {
    constructor(loginService, adminService) {
        this.loginService = loginService;
        this.adminService = adminService;
    }
    ngOnInit() {
        this.todayDate = new Date();
    }
};
AdminHomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-admin-home',
        templateUrl: './admin-home.component.html',
        styleUrls: ['./admin-home.component.css']
    })
], AdminHomeComponent);
export { AdminHomeComponent };
//# sourceMappingURL=admin-home.component.js.map