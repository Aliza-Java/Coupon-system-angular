import { Component, OnInit } from '@angular/core';
import { Login } from '../../shared/models/login';
import { LoginService } from '../../shared/services/login.service';
import { LoginType } from '../../shared/models/loginType';
import { Company } from 'src/app/shared/models/company';
import { ErrorService } from 'src/app/shared/services/error.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    types= ["Admin", "Company", "Customer"];

    //Contains the login details from the form
    public login: Login = new Login();

    //set values for sample logins
   private adminLogin:Login = new Login('root', 'sql123', "Admin");
   private sampleCompanyLogin:Login = new Login('comp2', 'pass2', "Company");
   private sampleCustomerLogin:Login = new Login('cust3', 'pass3', "Customer");
typeString = "ADMIN";


    constructor(public loginService: LoginService, public errorService:ErrorService) { }

    ngOnInit() {
     
        this.errorService.updateErrorMessage.next("");
        //Initialize the dropdown
        this.login.type=this.types[0];
    }

     send(): void {
        //sends the login details.  
        this.loginService.checkLogin(this.login);
    }

    setAdminLogin(){
        this.errorService.updateErrorMessage.next("");
        this.login = this.adminLogin;
        this.login.type = this.types[0];
    }

    setCompanyLogin(){
        this.errorService.updateErrorMessage.next("");
        this.login = this.sampleCompanyLogin
        this.login.type = this.types[1];

    }

    setCustomerLogin(){
        this.errorService.updateErrorMessage.next("");
        this.login = this.sampleCustomerLogin;
        this.login.type = this.types[2];
    }
}
