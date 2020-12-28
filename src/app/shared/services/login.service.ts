import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { JwtResponse } from '../models/jwtResponse';
import { LoginType } from '../models/loginType';
import { ErrorService } from './error.service';


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    isLoggedIn: boolean = false;

   // host: string = "http://localhost:5000/CouponSystem/";
     host:string = "http://couponservice-env.eba-s7cz5xcc.us-east-1.elasticbeanstalk.com/CouponSystem/";

    baseUrl = this.host;

    user: User;
    username: string;

    constructor(public httpClient: HttpClient, public router: Router, public errorService: ErrorService) {
        //initiating so that sidebar component can rely on this variable.
        this.user = new User();

        //in case user refreshed or reopened browser 
        this.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    }

    checkLogin(login: Login) {
        //login types on server are stored in capital letters.
        login.type = login.type.toUpperCase();

        this.httpClient.post<JwtResponse>(`${this.baseUrl}authenticate`, login, { withCredentials: true })
            .subscribe((res) => {
                this.errorService.updateErrorMessage.next("");

                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("token", res.token);
                this.isLoggedIn = true;
                this.user.id = res.id;
                this.user.type = LoginType[login.type];
                this.username = login.username;
                this.router.navigate([`${this.user.type.toLowerCase()}/home`]);

            },
                (err) => {
                    if (err.status === 403) {
                        this.errorService.updateErrorMessage.next("The credentials are incorrect.");
                    }
                    else {
                        this.errorService.updateErrorMessage.next("There was a problem logging in. " + this.errorService.extractError(err));
                    }
                });
    }


    forceLogout() {
        this.errorService.updateErrorMessage.next("");

        alert('You cannot access this url without logging in properly.');
        this.router.navigate(['/login']);
        this.isLoggedIn = false;
        localStorage.removeItem("isLoggedIn");

        this.user.type = null; //side bar will return to blank

    }

    logout() {
        this.errorService.updateErrorMessage.next("");
        if (confirm("Are you sure you want to log out?")) { //giving user a chance to regret it

            this.isLoggedIn = false;
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("token");
            this.user.type = null; //side bar will return to blank
            this.router.navigate([`/login`]);
        }
    }
}
