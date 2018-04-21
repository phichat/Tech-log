import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'selectize';

declare var jQuery: any;
@Component({
    selector: 'app-notice-manage',
    templateUrl: './noticeManage.component.html',
    styleUrls: ['./noticeManage.component.scss']
})

export class NoticeManageComponent implements OnInit {
    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) { }
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
                } else if (param && param.D) {
                    this.mode = 'd';
                    if (confirm('ยืนยันการทำรายการหรือไม่?')) {

                    } else {
                        this._router.navigate(['/investigate/notice-manage'], { queryParams: { R: true, NoticeCode: '' } });
                    }
                }
            });
    }

    ngAfterViewInit() {
        // jQuery('.action-setting').slideToggle();
    }

    cancel() {
        if (confirm('ยืนยันการทำรายการหรือไม่?')) {

        }
    }

    save() {
        if (confirm('ยืนยันการทำรายการหรือไม่?')) {

        }
    }
}
