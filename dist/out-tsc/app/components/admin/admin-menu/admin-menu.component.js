import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AdminMenuComponent = class AdminMenuComponent {
    //any click on a routerlink will reset the error and result messages in Admin Service  
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
    }
};
AdminMenuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-admin-menu',
        templateUrl: './admin-menu.component.html',
        styleUrls: ['./admin-menu.component.css']
    })
], AdminMenuComponent);
export { AdminMenuComponent };
//# sourceMappingURL=admin-menu.component.js.map