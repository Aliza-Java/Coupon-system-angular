import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/shared/services/admin.service';
import { CompanyService } from 'src/app/shared/services/company.service';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { ErrorService } from 'src/app/shared/services/error.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy {
    @Input()
    message: string;
    messageSubscription:Subscription;
    constructor(public errorService:ErrorService) { 
        this.message = "";
    }
    
    ngOnInit() {
        this.messageSubscription = this.errorService.updateErrorMessage.subscribe(message => this.message = message);
    }

    ngOnDestroy(): void {
        this.messageSubscription.unsubscribe();
    }


}
