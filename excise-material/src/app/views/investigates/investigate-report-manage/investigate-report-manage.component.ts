import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoodsService } from '../../../services/goods.service';
import { GoodsModel } from '../../../models/goods-model';

@Component({
    selector: 'app-investigate-report-manage',
    templateUrl: './investigate-report-manage.component.html',
    styleUrls: ['./investigate-report-manage.component.scss'],
    providers: [
        GoodsService
    ]
})
export class InvestigateReportManageComponent implements OnInit {

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private goodService: GoodsService
    ) { }

    mode: string;
    currentUrl: string;
    confirmMass: string;
    good: Array<GoodsModel>;

    ngOnInit() {
        this.currentUrl = '/investigate/investigate-report/manage';
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

        this.goodService.currentData.subscribe(p => this.good = p);
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
