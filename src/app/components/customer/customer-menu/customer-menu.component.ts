import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
    selector: 'app-customer-menu',
    templateUrl: './customer-menu.component.html',
    styleUrls: ['./customer-menu.component.css']
})
export class CustomerMenuComponent implements OnInit {

    constructor(public customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.checkCustomer();

    }

}
