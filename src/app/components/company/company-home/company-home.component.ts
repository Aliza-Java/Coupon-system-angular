import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { CompanyService } from 'src/app/shared/services/company.service';


@Component({
    selector: 'app-company-home',
    templateUrl: './company-home.component.html',
    styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent implements OnInit {

    public todayDate: Date;


    constructor(public companyService: CompanyService, public loginService: LoginService) { }

    ngOnInit() {
        this.companyService.checkCompany();

        this.todayDate = new Date();
        this.companyService.getCompany();
    }

}