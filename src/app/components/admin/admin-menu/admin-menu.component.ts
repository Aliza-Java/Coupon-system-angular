import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { NavigationEnd, Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
    selector: 'app-admin-menu',
    templateUrl: './admin-menu.component.html',
    styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

    //any click on a routerlink will reset the error and result messages in Admin Service  
    constructor(public adminService: AdminService) { }

    ngOnInit() {
        this.adminService.checkAdmin();

    }

}
