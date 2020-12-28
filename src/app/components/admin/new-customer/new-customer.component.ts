import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
    selector: 'app-new-customer',
    templateUrl: './new-customer.component.html',
    styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {


    public newName: string;
    public newPassword: string;

    constructor(public adminService: AdminService) { }


    ngOnInit() {
        this.adminService.checkAdmin();

        //resetting variables if this component is re-entered.
        this.newName = "";
        this.newPassword = "";
    }

    send() {
        this.adminService.createNewCustomer(this.newName, this.newPassword);
    }

    again() {

        //refresh all to send a new customer
        this.newName = "";
        this.newPassword = "";
        this.adminService.resultMessage = "";
    }
}
