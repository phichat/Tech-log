import { Component, OnInit } from '@angular/core';
import { adminBSB } from '../../../app.admin';

@Component({
    selector: 'app-basiclayout',
    templateUrl: './basicLayout.component.html'
})
export class BasicLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        adminBSB();
    }
}
