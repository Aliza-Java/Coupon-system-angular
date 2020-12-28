export class Coupon {
    // TODO: add ? after field names if are optional.
    constructor(id, title, startDate, //yyyy-MM-dd string to be decoded after reciving
    endDate, //yyyy-MM-dd string to be decoded after reciving
    amount, category, //enum? 
    message, price, image, company) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.category = category;
        this.message = message;
        this.price = price;
        this.image = image;
        this.company = company;
    }
}
//# sourceMappingURL=coupon.js.map