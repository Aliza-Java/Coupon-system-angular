import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
    showMe = false;
    constructor(public loginService: LoginService) {
    }

    ngOnInit() {
    }

    clickToShowMe(){
        this.showMe=true;
    }

    hideMe(){
        this.showMe=false;
    }

}
