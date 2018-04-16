import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import 'selectize';
import { ActivatedRoute } from '@angular/router';

declare var jQuery: any;
@Component({
    selector: 'app-notice-manage',
    templateUrl: './noticeManage.component.html',
    styleUrls: ['./noticeManage.component.scss']
})

export class NoticeManageComponent implements OnInit {
    constructor(private _route: ActivatedRoute) { }
    private mode: string;
    select: any;

    @ViewChild('select') vSelectize: ElementRef;
    @ViewChild('appDatepicker') vDatepicker: ElementRef;

    ngOnInit() {
        this._route.queryParams
            .subscribe(param => {
                if (param && param.C) {
                    this.mode = 'c';
                } else if (param && param.R) {
                    this.mode = 'r';
                } else if (param && param.U) {
                    this.mode = 'u';
                }
            });
    }

    ngAfterViewInit() {
        // jQuery('.action-setting').slideToggle();
    }
}
