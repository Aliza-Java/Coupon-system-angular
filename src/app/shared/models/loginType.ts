export enum LoginType{
    ADMIN="ADMIN",
    COMPANY="COMPANY",
    CUSTOMER = "CUSTOMER"
}


export namespace LoginType {
    export function keys() {
        return Object.keys(LoginType).filter(k => !isNaN(Number(k)));
    }
}