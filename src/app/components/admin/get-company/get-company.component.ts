import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/models/company';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
    selector: 'app-get-company',
    templateUrl: './get-company.component.html',
    styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent implements OnInit {

    companyId: number;
    public errorMessage: string;

    constructor(public adminService: AdminService) { }

    ngOnInit() {
        this.adminService.checkAdmin();

        //To populate dropdown
        this.adminService.getAllCompanies();

        //in order to prevent empty choice.
        this.companyId = this.adminService.allCompanies[0].id;
    }

}
