import { LoginType } from './loginType';

export class User{
    public constructor(
        public id?:number,
        public type?:LoginType,
   ){ }
}