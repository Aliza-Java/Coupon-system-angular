import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/shared/services/company.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { Coupon } from 'src/app/shared/models/coupon';
import { HttpClient } from '@angular/common/http';
import { CouponCategory } from 'src/app/shared/models/couponCategory';


@Component({
    selector: 'app-all-coupons',
    templateUrl: './all-coupons.component.html',
    styleUrls: ['./all-coupons.component.css']
})
export class AllCouponsComponent implements OnInit {



    //These contain the chosen values for various selects
    byCategory: CouponCategory;
    byPrice: number;
    byDate: string;

    //This is by default the message appearing if no coupons exist (different selects will change this message appropriately)
    emptyListMessage: string = "coupons for your company."

    constructor(public companyService: CompanyService, public loginService: LoginService, public httpClient: HttpClient) { }

    ngOnInit() {
        this.companyService.checkCompany();
        this.companyService.getAllCoupons();
    }

    selectAllCoupons() {
        this.emptyListMessage = "coupons for your company.";
        this.companyService.getAllCoupons();

    }

    selectByPrice() {
        this.emptyListMessage = "coupons under this price.";
        this.companyService.selectByPrice(this.byPrice);

    }
    selectByCategory() {
        this.emptyListMessage = "coupons in this category.";
        this.companyService.selectByCategory(this.byCategory);
    }

    selectByDate() {
        this.emptyListMessage = "coupons before this date.";
        this.companyService.selectByDate(this.byDate);
    }

}