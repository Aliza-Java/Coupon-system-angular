import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/shared/services/company.service';

@Component({
    selector: 'app-company-menu',
    templateUrl: './company-menu.component.html',
    styleUrls: ['./company-menu.component.css']
})
export class CompanyMenuComponent implements OnInit {

    constructor(public companyService: CompanyService) { }

    ngOnInit() {
        this.companyService.checkCompany();

    }

}
