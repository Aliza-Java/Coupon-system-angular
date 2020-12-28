import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/shared/services/company.service';
import { Coupon } from 'src/app/shared/models/coupon';

@Component({
    selector: 'app-new-coupon',
    templateUrl: './new-coupon.component.html',
    styleUrls: ['./new-coupon.component.css']
})
export class NewCouponComponent implements OnInit {

    //couponBaseFolder: string = "";
    newCoupon: Coupon;
    errorString: string;
    today: string = new Date().toISOString().split('T')[0]; //for later comparison of end date.
    endDateErrorMessage: string;
    backwardDates: boolean = false;
    couponExpired: boolean = false;

    constructor(public companyService: CompanyService) { }

    ngOnInit() {
        this.companyService.checkCompany();

        this.newCoupon = new Coupon();
    }

    checkBothDates() {
        if (this.newCoupon.endDate) {//check if end date is before today
            if (this.newCoupon.endDate < this.today) {
                this.couponExpired = true;
            } else this.couponExpired = false; //if user fixed it
            if (this.newCoupon.startDate) { //will only get checked if both dates are entered (comparison)
                if (this.newCoupon.endDate < this.newCoupon.startDate) { //end date before start date
                    this.backwardDates = true;
                } else this.backwardDates = false; //if user fixed it
            }
        }
    }


    createNewCoupon(): void {
        //Assigning this company to coupon.
        this.newCoupon.company = this.companyService.currentCompany;
        this.companyService.createCoupon(this.newCoupon);
    }

    again() {
        this.newCoupon = new Coupon();
        this.companyService.resultMessage = "";
    }

}
