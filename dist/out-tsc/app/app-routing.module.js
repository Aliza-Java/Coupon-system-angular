import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllCompaniesComponent } from './components/admin/all-companies/all-companies.component';
import { AllCustomersComponent } from './components/admin/all-customers/all-customers.component';
import { DeleteCompanyComponent } from './components/admin/delete-company/delete-company.component';
import { DeleteCustomerComponent } from './components/admin/delete-customer/delete-customer.component';
import { GetCompanyComponent } from './components/admin/get-company/get-company.component';
import { GetCustomerComponent } from './components/admin/get-customer/get-customer.component';
import { NewCompanyComponent } from './components/admin/new-company/new-company.component';
import { NewCustomerComponent } from './components/admin/new-customer/new-customer.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { AllCouponsComponent } from './components/company/all-coupons/all-coupons.component';
import { NewCouponComponent } from './components/company/new-coupon/new-coupon.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';
import { GetCouponComponent } from './components/company/get-coupon/get-coupon.component';
import { DeleteCouponComponent } from './components/company/delete-coupon/delete-coupon.component';
import { PurchaseComponent } from './components/customer/purchase/purchase.component';
import { CustomerCouponsComponent } from './components/customer/customer-coupons/customer-coupons.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { CompanyHomeComponent } from './components/company/company-home/company-home.component';
import { CustomerHomeComponent } from './components/customer/customer-home/customer-home.component';
import { LoginComponent } from './components/login/login.component';
const routes = [
    //common components
    { path: '', redirectTo: "/login", pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    //admin components
    { path: "admin/home", component: AdminHomeComponent },
    { path: "admin/companies", component: AllCompaniesComponent },
    { path: "admin/newcompany", component: NewCompanyComponent },
    { path: "admin/company", component: GetCompanyComponent },
    { path: "admin/updatecompany", component: UpdateCompanyComponent },
    { path: "admin/removecompany", component: DeleteCompanyComponent },
    { path: "admin/customers", component: AllCustomersComponent },
    { path: "admin/newcustomer", component: NewCustomerComponent },
    { path: "admin/customer", component: GetCustomerComponent },
    { path: "admin/updatecustomer", component: UpdateCustomerComponent },
    { path: "admin/removecustomer", component: DeleteCustomerComponent },
    //company components
    { path: "company/home", component: CompanyHomeComponent },
    { path: "company/coupons", component: AllCouponsComponent },
    { path: "company/newcoupon", component: NewCouponComponent },
    { path: "company/coupon", component: GetCouponComponent },
    { path: "company/updatecoupon", component: UpdateCouponComponent },
    { path: "company/removecoupon", component: DeleteCouponComponent },
    //customer components
    { path: "customer/home", component: CustomerHomeComponent },
    { path: "customer/coupons", component: CustomerCouponsComponent },
    { path: "customer/purchase", component: PurchaseComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map