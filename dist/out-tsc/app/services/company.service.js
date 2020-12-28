import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let CompanyService = class CompanyService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.serviceText = "servicetext";
    }
    loginTest() {
        console.log("l");
        this.httpClient.get("http://localhost:8080/CouponSystem/login?username=root&password=sql123&type=ADMIN")
            .subscribe(res => console.log("success"), err => this.errorMessage = err);
    }
};
CompanyService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CompanyService);
export { CompanyService };
//# sourceMappingURL=company.service.js.map