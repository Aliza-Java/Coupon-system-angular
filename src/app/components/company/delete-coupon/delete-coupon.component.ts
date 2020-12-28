import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/shared/services/company.service';

@Component({
    selector: 'app-delete-coupon',
    templateUrl: './delete-coupon.component.html',
    styleUrls: ['./delete-coupon.component.css']
})
export class DeleteCouponComponent implements OnInit {

    constructor(public companyService: CompanyService) { }

    ngOnInit() {
        this.companyService.checkCompany();

        this.companyService.getAllCoupons();
    }

}
