import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/models/company';
import { CompanyService } from 'src/app/shared/services/company.service';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/shared/models/customer';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
    selector: 'app-all-customers',
    templateUrl: './all-customers.component.html',
    styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {


    public allCustomers: Customer[];

    constructor(public adminService: AdminService) { 

    }

    ngOnInit(): void {
        this.adminService.checkAdmin();

        this.adminService.getAllCustomers();

    }

}