import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-notice-manage',
    templateUrl: './notice-manage.component.html',
    styleUrls: ['./notice-manage.component.scss']
})
export class NoticeManageComponent implements OnInit {

    constructor(private _route: ActivatedRoute, private _router: Router) { }

    mode: string;
    currentUrl: string;
    confirmMass: string;

    ngOnInit() {
        this.currentUrl = '/investigate/notice-manage';
        this.confirmMass = 'ยืนยันการทำรายการหรือไม่?';

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
                    if (confirm(this.confirmMass)) {

                    } else {
                        this._router.navigate([this.currentUrl], { queryParams: { R: true, NoticeCode: '' } });
                    }
                }
            });
    }

    toEdit() {
        this._router.navigate([this.currentUrl], { queryParams: { U: true, InvestigationID: '' } });
    }

    toPrint() {
        this._router.navigate([this.currentUrl], { queryParams: { P: true, InvestigationID: '' } });
    }

    toDelete() {
        this._router.navigate([this.currentUrl], { queryParams: { D: true, InvestigationID: '' } });
    }

    cancel() {
        if (confirm(this.confirmMass)) {

        }
    }

    save() {
        if (confirm(this.confirmMass)) {

        }
    }

}
