import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/shared/services/company.service';

@Component({
    selector: 'app-get-coupon',
    templateUrl: './get-coupon.component.html',
    styleUrls: ['./get-coupon.component.css']
})
export class GetCouponComponent implements OnInit {

    private couponId: number;

    constructor(public companyService: CompanyService) { }

    ngOnInit() {
        this.companyService.checkCompany();

        this.companyService.getAllCoupons(); //for dropdown
        this.couponId=this.companyService.allCoupons[0].id; //To initialize drop down
    }

}
