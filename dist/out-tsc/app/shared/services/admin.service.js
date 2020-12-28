import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AdminService = class AdminService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        //baseUrl: string = "http://localhost:5000/CouponSystem/sec/admin/";
        this.baseUrl = "http://CouponService-env.eba-s7cz5xcc.us-east-1.elasticbeanstalk.com/CouponSystem/sec/admin/";
        this.errorMessage = "";
        this.resultMessage = "";
        this.emptyList = false;
    }
    resetMessages() {
        this.errorMessage = "";
        this.resultMessage = "";
        this.companyToGet = null;
        this.customerToGet = null;
        this.emptyList = false;
    }
    getAllCompanies() {
        this.httpClient.get(`${this.baseUrl}companies`, { withCredentials: true })
            .subscribe(res => {
            this.allCompanies = res;
        }, err => this.errorMessage = err.error.messages);
    }
    createNewCompany(name, password, email) {
        var addedCompany = {
            "name": name,
            "password": password,
            "email": email
        };
        this.httpClient.post(`${this.baseUrl}newcompany`, addedCompany, { withCredentials: true })
            .subscribe((res) => this.resultMessage = `Success! Company ${res.name} was created with id ${res.id}.`, (err) => { console.log(err.error.messages); });
    }
    findCompanyNow(id) {
        this.httpClient.get(`${this.baseUrl}company/${id}`, { withCredentials: true })
            .subscribe(res => this.companyToGet = res, err => console.log(err.error.messages));
    }
    updateCompany(companyToUpdate) {
        this.httpClient.put(`${this.baseUrl}updatecompany/${companyToUpdate.id}`, companyToUpdate, { withCredentials: true })
            .subscribe(() => alert(`Company ${companyToUpdate.id} has been successfully updated.`), err => alert("We could not update this company.  "));
    }
    deleteCompany(id) {
        if (confirm('Are you sure you want to delete company of id ' + id + '?')) { //user must confirm his intention to delete
            this.httpClient.delete(`${this.baseUrl}removecompany/${id}`, { withCredentials: true })
                .subscribe(res => {
                alert(`Company ${id} deleted successfully.`);
                this.getAllCompanies(); //update table
            }, err => {
                alert("Unable to delete. ");
                this.getAllCompanies(); //Update dropdown with existing companies.
            });
        }
        else {
            // Do nothing.  Giving user a chance to regret it.
        }
    }
    getAllCustomers() {
        this.httpClient.get(`${this.baseUrl}customers`, { withCredentials: true })
            .subscribe(res => { this.allCustomers = res; }, err => this.errorMessage = err);
    }
    createNewCustomer(name, password) {
        var addedCustomer = {
            "name": name,
            "password": password,
        };
        this.httpClient.post(`${this.baseUrl}newcustomer`, addedCustomer, { withCredentials: true }).subscribe((res) => { this.resultMessage = `Success! Customer ${res.name} was created with id ${res.id}.`; }, (err) => {
            console.log(err.error.messages);
        });
    }
    findCustomerNow(id) {
        this.httpClient.get(`${this.baseUrl}customer/${id}`, { withCredentials: true })
            .subscribe(res => this.customerToGet = res, err => console.log(err.error.messages));
    }
    updateCustomer(customerToUpdate) {
        this.httpClient.put(`${this.baseUrl}updatecustomer/` + customerToUpdate.id, customerToUpdate, { withCredentials: true })
            .subscribe(res => alert(`Customer ${customerToUpdate.id} has been successfully updated.`), err => alert("We could not update this customer. "));
    }
    deleteCustomer(id) {
        if (confirm('Are you sure you want to delete customer of id ' + id + '?')) { //user must confirm his intention to delete
            this.httpClient.delete(`${this.baseUrl}removecustomer/${id}`, { withCredentials: true })
                .subscribe(res => {
                alert(`Customer ${id} deleted successfully.`);
                this.getAllCustomers(); //update table
            }, err => {
                alert("Unable to delete. ");
                this.getAllCustomers(); //update dropdown with existing customers
            });
        }
        else {
            // Do nothing.  Giving user a chance to regret it.
        }
    }
};
AdminService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AdminService);
export { AdminService };
//# sourceMappingURL=admin.service.js.map