import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Login } from '../../shared/models/login';
import { LoginType } from '../../shared/models/loginType';
let LoginComponent = class LoginComponent {
    constructor(loginService) {
        this.loginService = loginService;
        //Contains the login details from the form
        this.login = new Login();
    }
    ngOnInit() {
        //Retrieving types from loginType enum
        var typeArray = Object.keys(LoginType);
        //Removing 'keys' value at the end of enum array
        this.types = typeArray.slice(0, typeArray.length - 1);
        //Initialize the dropdown
        this.login.type = this.types[0];
    }
    send() {
        //sends the login details.  
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