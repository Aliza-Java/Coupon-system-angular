import { Coupon } from './coupon';

export class Customer {
    public constructor(
        public id?: number,
        public name?: string,
        public password?: string,
        public coupons?: Coupon[]
    ) { }

}