import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SideBarComponent = class SideBarComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.showMe = false;
    }
    ngOnInit() {
    }
    clickToShowMe() {
        this.showMe = true;
    }
    hideMe() {
        this.showMe = false;
    }
};
SideBarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-side-bar',
        templateUrl: './side-bar.component.html',
        styleUrls: ['./side-bar.component.css']
    })
], SideBarComponent);
export { SideBarComponent };
//# sourceMappingURL=side-bar.component.js.map