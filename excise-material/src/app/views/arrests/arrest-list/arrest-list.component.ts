import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

declare var jQuery;

@Component({
    selector: 'app-arrest-list',
    templateUrl: './arrest-list.component.html',
    styleUrls: ['./arrest-list.component.scss']
})

export class ArrestListComponent implements OnInit {

    typeCase: any[];
    endCase: any[];

    constructor(private _router: Router) { }

    ngOnInit() {
        this.typeCase = [
            { value: 't01', text: 'ฟ้องศาล' },
            { value: 't02', text: 'เปรียบเทียบปรับ' },
            { value: 't03', text: 'ไม่มีตัว' }
        ];

        this.endCase = [
            { value: 'e01', text: 'กรมสรรพสามติ' },
            { value: 'e02', text: 'ศาล' },
            { value: 'e03', text: 'พนักงานสอบสวน/พนักงานอัยการ' }
        ];
    }

    slideToggle(el) {
        jQuery(el).slideToggle();
    }

    createNew() {
        this._router.navigate(['/arrest/arrest-manage'], { queryParams: { C: true, InvestigationID: 'NEW' } });
    }

    compareDate(date1, date2) {
        date1 = new Date(date1);
        date2 = new Date(date2);
        if (date1 > date2) {
            // return moment.format();
        }
    }
}
