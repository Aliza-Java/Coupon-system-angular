import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Company } from '../models/company';
import { LoginService } from './login.service';
import { LoginType } from '../models/loginType';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';


@Injectable({
    providedIn: 'root'
})
export class AdminService {

    baseUrl: string;

    public allCompanies: Company[];
    public allCustomers: Customer[];
    public companyToGet: Company;
    public customerToGet: Customer;
    public errorMessage: string;
    public resultMessage: string;
    public emptyList: boolean;
    public headers: HttpHeaders;


    public constructor(public httpClient: HttpClient, public loginService: LoginService, public router: Router, public errorService: ErrorService) {
        this.errorService.updateErrorMessage.next("");
        this.resultMessage = "";
        this.emptyList = false;
        this.baseUrl = this.loginService.host + 'sec/admin/';

    }



    resetMessages() {
        this.errorService.updateErrorMessage.next("");
        this.resultMessage = "";
        this.companyToGet = null;
        this.customerToGet = null;
        this.emptyList = false;
    }

    getAllCompanies() {

        this.httpClient.get<Company[]>(`${this.baseUrl}companies`, { withCredentials: true })
            .subscribe(res => {
                this.allCompanies = res;
                this.errorService.updateErrorMessage.next("");
            },
                err => {
                    this.errorService.updateErrorMessage.next("Unable to load companies. " + this.errorService.extractError(err));
                });
    }

    public createNewCompany(name: string, password: string, email: string): void {

        var addedCompany: Company = {
            "name": name,
            "password": password,
            "email": email
        };

        this.httpClient.post<Company>(`${this.baseUrl}newcompany`, addedCompany, { withCredentials: true })
            .subscribe(
                (res) => {
                    this.errorService.updateErrorMessage.next("");
                    this.resultMessage = `Success! Company ${res.name} was created with id ${res.id}.`;
                },
                (err) => {
                    this.errorService.updateErrorMessage.next("Unable to add company. " + this.errorService.extractError(err));
                }
            );
    }

    public findCompanyNow(id: number) {
        this.httpClient.get<Company>(`${this.baseUrl}company/${id}`, { withCredentials: true })
            .subscribe(res => {
                this.errorService.updateErrorMessage.next("");
                this.companyToGet = res;
            }, err => {
                this.errorService.updateErrorMessage.next(`Unable to load company of id ${id}. ` + this.errorService.extractError(err));
            });
    }

    public updateCompany(companyToUpdate: Company) {
        this.httpClient.put<Company>(`${this.baseUrl}updatecompany/${companyToUpdate.id}`, companyToUpdate, { withCredentials: true })
            .subscribe(() => {
                this.errorService.updateErrorMessage.next("");
                alert(`Company ${companyToUpdate.id} has been successfully updated.`);
            }, err => {
                this.errorService.updateErrorMessage.next("Unable to update company. " + this.errorService.extractError(err));
            });
    }

    deleteCompany(id: number) {
        if (confirm('Are you sure you want to delete company of id ' + id + '?')) { //user must confirm his intention to delete
            this.httpClient.delete(`${this.baseUrl}removecompany/${id}`, { withCredentials: true })
                .subscribe(res => {
                    this.errorService.updateErrorMessage.next("");
                    alert(`Company ${id} deleted successfully.`);
                    this.getAllCompanies();//update table
                }, err => {
                    this.errorService.updateErrorMessage.next("Unable to delete. " + this.errorService.updateErrorMessage.next(this.errorService.extractError(err)));
                    this.getAllCompanies(); //Update dropdown with existing companies.
                });
        } else {
            // Do nothing.  Giving user a chance to regret it.
        }
    }


    getAllCustomers() {
        this.httpClient.get<Customer[]>(`${this.baseUrl}customers`, { withCredentials: true })
            .subscribe(res => {
                this.errorService.updateErrorMessage.next("");
                this.allCustomers = res;
            }, err => {
                this.errorService.updateErrorMessage.next("Unable to load customers. " + this.errorService.updateErrorMessage.next(this.errorService.extractError(err)));
            });
    }

    public createNewCustomer(name: string, password: string) {

        var addedCustomer: Customer = {
            "name": name,
            "password": password,
        };

        this.httpClient.post<Customer>(`${this.baseUrl}newcustomer`, addedCustomer, { withCredentials: true }).subscribe(
            (res) => {
                this.errorService.updateErrorMessage.next("");
                this.resultMessage = `Success! Customer ${res.name} was created with id ${res.id}.`;
            },
            (err) => {
                this.errorService.updateErrorMessage.next("Unable to add customer. " + this.errorService.updateErrorMessage.next(this.errorService.extractError(err)));
            });
    }

    public findCustomerNow(id: number) {
        this.httpClient.get<Customer>(`${this.baseUrl}customer/${id}`, { withCredentials: true })
            .subscribe(res => {
                this.errorService.updateErrorMessage.next("");
                this.customerToGet = res;
            }, err => {
                this.errorService.updateErrorMessage.next(`Unable to load company of id ${id}. ` + this.errorService.extractError(err));
            });
    }

    public updateCustomer(customerToUpdate: Customer) {
        this.httpClient.put<Customer>(`${this.baseUrl}updatecustomer/` + customerToUpdate.id, customerToUpdate, { withCredentials: true })
            .subscribe(() => {
                this.errorService.updateErrorMessage.next("");
                alert(`Customer ${customerToUpdate.id} has been successfully updated.`);
            },
                err => {
                    this.errorService.updateErrorMessage.next(`Unable to update customer. ` + this.errorService.extractError(err));
                });
    }

    deleteCustomer(id: number) {
        if (confirm('Are you sure you want to delete customer of id ' + id + '?')) { //user must confirm his intention to delete
            this.httpClient.delete(`${this.baseUrl}removecustomer/${id}`, { withCredentials: true })
                .subscribe(res => {
                    this.errorService.updateErrorMessage.next("");
                    alert(`Customer ${id} deleted successfully.`);
                    this.getAllCustomers(); //update table
                },
                    err => {
                        this.errorService.updateErrorMessage.next(`Unable to delete. ` + this.errorService.extractError(err));
                        this.getAllCustomers(); //update dropdown with existing customers

                    });
        } else {
            // Do nothing.  Giving user a chance to regret it.
        }
    }

    checkAdmin() {
        if (this.loginService.user.type != LoginType.ADMIN) {
            this.loginService.forceLogout();
        }
    }


}