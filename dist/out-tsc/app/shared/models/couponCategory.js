export var CouponCategory;
(function (CouponCategory) {
    CouponCategory[CouponCategory["TRAVELING"] = 0] = "TRAVELING";
    CouponCategory[CouponCategory["FOOD"] = 1] = "FOOD";
    CouponCategory[CouponCategory["ELECTRICITY"] = 2] = "ELECTRICITY";
    CouponCategory[CouponCategory["HEALTH"] = 3] = "HEALTH";
    CouponCategory[CouponCategory["SPORT"] = 4] = "SPORT";
    CouponCategory[CouponCategory["CAMPING"] = 5] = "CAMPING";
    CouponCategory[CouponCategory["FASHION"] = 6] = "FASHION";
    CouponCategory[CouponCategory["STUDIES"] = 7] = "STUDIES";
})(CouponCategory || (CouponCategory = {}));
(function (CouponCategory) {
    function keys() {
        return Object.keys(CouponCategory).filter(k => !isNaN(Number(k)));
    }
    CouponCategory.keys = keys;
})(CouponCategory || (CouponCategory = {}));
//# sourceMappingURL=couponCategory.js.map