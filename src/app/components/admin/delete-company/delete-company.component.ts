import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/models/company';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
    selector: 'app-delete-company',
    templateUrl: './delete-company.component.html',
    styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {

    currentCompanies: Company[];

    constructor(public adminService: AdminService) {

    }

    ngOnInit() {
        this.adminService.checkAdmin();

        //To populate dropdown
        this.adminService.getAllCompanies();
    }

}
