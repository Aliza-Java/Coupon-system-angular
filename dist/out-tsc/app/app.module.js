import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';
import { CompanyMenuComponent } from './components/company/company-menu/company-menu.component';
import { CustomerMenuComponent } from './components/customer/customer-menu/customer-menu.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainComponent } from './components/main/main.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AllCompaniesComponent } from './components/admin/all-companies/all-companies.component';
import { GetCompanyComponent } from './components/admin/get-company/get-company.component';
import { NewCompanyComponent } from './components/admin/new-company/new-company.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { DeleteCompanyComponent } from './components/admin/delete-company/delete-company.component';
import { AllCustomersComponent } from './components/admin/all-customers/all-customers.component';
import { DeleteCustomerComponent } from './components/admin/delete-customer/delete-customer.component';
import { GetCustomerComponent } from './components/admin/get-customer/get-customer.component';
import { NewCustomerComponent } from './components/admin/new-customer/new-customer.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { CompanyHomeComponent } from './components/company/company-home/company-home.component';
import { AllCouponsComponent } from './components/company/all-coupons/all-coupons.component';
import { NewCouponComponent } from './components/company/new-coupon/new-coupon.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';
import { GetCouponComponent } from './components/company/get-coupon/get-coupon.component';
import { DeleteCouponComponent } from './components/company/delete-coupon/delete-coupon.component';
import { PurchaseComponent } from './components/customer/purchase/purchase.component';
import { CustomerHomeComponent } from './components/customer/customer-home/customer-home.component';
import { CustomerCouponsComponent } from './components/customer/customer-coupons/customer-coupons.component';
import { LoginComponent } from './components/login/login.component';
import { EmptyListComponent } from './components/empty-list/empty-list.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [LayoutComponent, HeaderComponent, FooterComponent,
            AdminMenuComponent, CompanyMenuComponent, CustomerMenuComponent,
            SideBarComponent, MainComponent, AdminHomeComponent,
            AllCompaniesComponent, GetCompanyComponent, NewCompanyComponent,
            UpdateCompanyComponent, DeleteCompanyComponent, AllCustomersComponent,
            DeleteCustomerComponent, GetCustomerComponent, NewCustomerComponent,
            UpdateCustomerComponent, CompanyHomeComponent, AllCouponsComponent,
            NewCouponComponent, UpdateCouponComponent, GetCouponComponent,
            DeleteCouponComponent, PurchaseComponent, CustomerHomeComponent, CustomerCouponsComponent, LoginComponent, EmptyListComponent],
        imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
        providers: [
            { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
        ],
        bootstrap: [LayoutComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map