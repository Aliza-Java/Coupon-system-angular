import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
    selector: 'app-customer-home',
    templateUrl: './customer-home.component.html',
    styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

    public todayDate: Date;


    constructor(public customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.checkCustomer();

        this.todayDate = new Date();
        this.customerService.getCustomerDetails();
    }

}