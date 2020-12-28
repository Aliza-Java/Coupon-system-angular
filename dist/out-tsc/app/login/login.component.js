import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Login } from '../shared/models/login';
import { LoginType } from '../shared/models/loginType';
let LoginComponent = class LoginComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.login = new Login();
    }
    ngOnInit() {
        this.types = Object.keys(LoginType);
    }
    send() {
        this.loginService.checkLogin(this.login);
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map