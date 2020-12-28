import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
    selector: 'app-delete-customer',
    templateUrl: './delete-customer.component.html',
    styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

    constructor(public adminService: AdminService) {
    }

    ngOnInit() {
        this.adminService.checkAdmin();

        //To populate dropdown
        this.adminService.getAllCustomers();
    }

}
