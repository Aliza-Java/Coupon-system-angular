import { Company } from './company';
import { CouponCategory } from './couponCategory';

export class Coupon {

    public company?: Company;
    public id?: number;

    public constructor(
        public title?: string,
        public startDate?: string, 
        public endDate?: string,   
        public amount?: number,
        public category?: CouponCategory,
        public message?: string,
        public price?: number,
        public image?: string
    ) { }
}