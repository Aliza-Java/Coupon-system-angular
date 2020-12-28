import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let HttpConfigInterceptor = class HttpConfigInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(catchError(error => {
            // Checking if it is an Authentication Error (401)
            if (error.status === 401) {
                this.router.navigate([`/login`]);
                alert('You are not logged in.  Log in first.');
                return throwError(error.message); //The message is what will be thrown to the Observable, which will show it in alert
            }
            // If it is not an authentication error, just throw it
            return throwError(error); //The message is what will be thrown to the Observable, which will handle it according to specifications
        }));
    }
};
HttpConfigInterceptor = tslib_1.__decorate([
    Injectable()
], HttpConfigInterceptor);
export { HttpConfigInterceptor };
//# sourceMappingURL=httpconfig.interceptor.js.map