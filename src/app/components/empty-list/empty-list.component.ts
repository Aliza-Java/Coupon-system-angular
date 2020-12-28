import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-empty-list',
    templateUrl: './empty-list.component.html',
    styleUrls: ['./empty-list.component.css']
})
export class EmptyListComponent implements OnInit {

    //This string will specify to the user which list exactly was empty    
    @Input()
    whatInWhere: string;

    constructor() { }

    ngOnInit() {
    }

}
