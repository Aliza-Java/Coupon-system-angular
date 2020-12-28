import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/shared/services/company.service';
import { HttpClient } from '@angular/common/http';
import { Coupon } from 'src/app/shared/models/coupon';
import { CouponCategory } from 'src/app/shared/models/couponCategory';
import { Company } from 'src/app/shared/models/company';
import { ErrorService } from 'src/app/shared/services/error.service';

@Component({
    selector: 'app-update-coupon',
    templateUrl: './update-coupon.component.html',
    styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {
    couponId: number;
    couponToUpdate: Coupon;
    wasChange: boolean = false;
    couponExpired: boolean = false;
    backwardDates: boolean = false;

    constructor(public companyService: CompanyService, public httpClient: HttpClient, public errorService:ErrorService) { }

    ngOnInit() {
        this.companyService.checkCompany();

        this.companyService.getAllCoupons(); //for dropdown
        this.couponId=this.companyService.allCoupons[0].id; //To initialize drop down


    }

    fillCouponDetails(): void {
        this.httpClient.get(`${this.companyService.baseUrl}coupon/${this.couponId}`, { withCredentials: true })
            .subscribe(res => { 
                this.couponToUpdate = res 
            }, 
            err => {
                this.errorService.updateErrorMessage.next(err.message);
            });
    }

    submitChanges(): void {
        //Assigning current company to coupon
        //Very important to attach company to coupon!  
        //Future updates won't be possible otherwise
        this.couponToUpdate.company = this.companyService.currentCompany; 
        
        this.companyService.updateCoupon(this.couponToUpdate);
    }

    enableSubmit() {
        this.wasChange = true;
    }

    checkDates() {
        if (this.couponToUpdate.endDate) { //will only enter checks if an end date has been entered
            let today: string = new Date().toISOString().split('T')[0];
            if (this.couponToUpdate.endDate < today) { //end date has expired
                this.couponExpired = true;
            } else this.couponExpired = false; //if user fixed it
            if (this.couponToUpdate.endDate < this.couponToUpdate.startDate) { //end date before start date
                this.backwardDates = true;
            } else this.backwardDates = false; //if user fixed it
        }
    }
  
}
