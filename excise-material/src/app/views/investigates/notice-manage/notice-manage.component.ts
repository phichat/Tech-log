import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoodsService } from '../../../services/goods.service';
import { ArrestListComponent } from '../../arrests/arrest-list/arrest-list.component';
import { GoodsModel } from '../../../models/goods-model';


@Component({
    selector: 'app-notice-manage',
    templateUrl: './notice-manage.component.html',
    styleUrls: ['./notice-manage.component.scss'],
    providers: [
        GoodsService
    ]
})
export class NoticeManageComponent implements OnInit {

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private goodService: GoodsService
    ) { }

    good: Array<GoodsModel>;
    mode: string;
    currentUrl: string;
    confirmMass: string;

    ngOnInit() {
        this.currentUrl = '/investigate/notice/manage';
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
