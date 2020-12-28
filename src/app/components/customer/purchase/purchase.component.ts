import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
    selector: 'app-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {


    constructor(public customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.checkCustomer();

        this.customerService.getAvailableCoupons();

    }

}
