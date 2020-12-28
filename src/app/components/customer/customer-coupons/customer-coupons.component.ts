import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/shared/models/coupon';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { CouponCategory } from 'src/app/shared/models/couponCategory';

@Component({
    selector: 'app-customer-coupons',
    templateUrl: './customer-coupons.component.html',
    styleUrls: ['./customer-coupons.component.css']
})
export class CustomerCouponsComponent implements OnInit {
    categories: string[];
    
    byCategory: CouponCategory;
    byPrice: number;

    //Message to appear if select gives on coupons.  By default user selects all coupons.  
    emptyListMessage: string = "coupons that belong to you."



    constructor(public customerService: CustomerService) {

        //initializing categories array with categories.
        var categories = Object.keys(CouponCategory);
        this.categories = categories.slice(categories.length / 2);
    }

    ngOnInit() {
        this.customerService.checkCustomer();
        this.customerService.getAllMyCoupons();
    }

    selectByCategory(): void {
        this.emptyListMessage = "of your coupons in this category."
        this.byPrice = null; //making it visually clear to user that selection is by category only
        this.customerService.selectByCategory(this.byCategory);
    }

    selectAll() {
        this.emptyListMessage = "coupons that belong to you."
        this.customerService.getAllMyCoupons();
    }

    selectByPrice() {
        this.emptyListMessage = "of your coupons under this price."

        this.byCategory = null; //making it visually clear to user that selection is by price only
        this.customerService.selectByPrice(this.byPrice);
    }
}
