import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
    selector: 'app-get-customer',
    templateUrl: './get-customer.component.html',
    styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {

    private customerId: number;

    constructor(public adminService: AdminService) { }

    ngOnInit() {
        this.adminService.checkAdmin();

        //To populate dropdown
        this.adminService.getAllCustomers();

        //in order to prevent empty choice.
        this.customerId = this.adminService.allCustomers[0].id;

    }


}
