import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/models/company';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
    selector: 'app-new-company',
    templateUrl: './new-company.component.html',
    styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {

    newName: string;
    newPassword: string;
    newEmail: string;


    constructor(public adminService: AdminService) { }

    ngOnInit() {
        this.adminService.checkAdmin();

    }

    send() {
        this.adminService.createNewCompany(this.newName, this.newPassword, this.newEmail);
    }

    again() {
        //refresh everything and start again.
        this.newName = "";
        this.newPassword = "";
        this.newEmail = "";
        this.adminService.resultMessage = "";

    }
}
