import { Coupon } from './coupon';

export class Company{

public constructor(
    public id?: number,
    public name?: string,
    public password?: string,
    public email?: string,
    public coupons?: Coupon[]
){}

}