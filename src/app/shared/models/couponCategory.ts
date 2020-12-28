export enum CouponCategory {
    TRAVELING,
    FOOD,
    ELECTRICITY,
    HEALTH,
    SPORT,
    CAMPING,
    FASHION,
    STUDIES
}

export namespace CouponCategory {
    export function keys() {
        return Object.keys(CouponCategory).filter(k => !isNaN(Number(k)));
    }
}