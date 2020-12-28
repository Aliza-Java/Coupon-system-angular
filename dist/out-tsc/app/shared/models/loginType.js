export var LoginType;
(function (LoginType) {
    LoginType["ADMIN"] = "ADMIN";
    LoginType["COMPANY"] = "COMPANY";
    LoginType["CUSTOMER"] = "CUSTOMER";
})(LoginType || (LoginType = {}));
(function (LoginType) {
    function keys() {
        return Object.keys(LoginType).filter(k => !isNaN(Number(k)));
    }
    LoginType.keys = keys;
})(LoginType || (LoginType = {}));
//# sourceMappingURL=loginType.js.map