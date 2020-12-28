import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/models/company';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/shared/services/admin.service';
import { ErrorService } from 'src/app/shared/services/error.service';

@Component({
    selector: 'app-update-company',
    templateUrl: './update-company.component.html',
    styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

    companyId: number;
    companyToUpdate: Company;
    public wasChange = false;


    constructor(public adminService: AdminService, public httpClient: HttpClient, public errorService:ErrorService) { }

    ngOnInit() {
        this.adminService.checkAdmin();

        this.adminService.getAllCompanies(); //filling in for the select options.
        this.wasChange = false;

        //in order to prevent empty choice.
        this.companyId = this.adminService.allCompanies[0].id;

    }

    fillCompanyDetails() {
        this.httpClient.get<Company>(`${this.adminService.baseUrl}company/${this.companyId}`, { withCredentials: true })
            .subscribe(res => {
                this.companyToUpdate = res;
                this.wasChange = false;
            },
                err => {
                    if (err.message) {
                        this.errorService.updateErrorMessage.next(err.message);
                    }else{
                        console.log(err);
                    }
                });
    }

    submitChanges() {
        this.adminService.updateCompany(this.companyToUpdate);
        this.wasChange = false;
    }

    //disabling submit button until user actually enters/deletes something in form.
    enableSubmit() {
        this.wasChange = true;
    }
}

