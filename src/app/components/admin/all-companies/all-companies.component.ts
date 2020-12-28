import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/models/company';
import { CompanyService } from 'src/app/shared/services/company.service';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
    selector: 'app-all-companies',
    templateUrl: './all-companies.component.html',
    styleUrls: ['./all-companies.component.css']
})
export class AllCompaniesComponent implements OnInit {

    public allCompanies: Company[];

    constructor(public adminService: AdminService) { }

    ngOnInit(): void {
        this.adminService.checkAdmin();

        this.adminService.getAllCompanies();
    }

}
