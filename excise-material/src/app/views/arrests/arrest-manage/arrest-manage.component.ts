import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../../../services/goods.service';
import { GoodsModel } from '../../../models/goods-model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arrest-manage',
  templateUrl: './arrest-manage.component.html',
  styleUrls: ['./arrest-manage.component.scss'],
  providers: [GoodsService]
})

export class ArrestManageComponent implements OnInit {

  good: Array<GoodsModel>;
  currentUrl: string;
  confirmMass: string;
  mode: string;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private goodService: GoodsService
  ) { }

  ngOnInit() {
    this.currentUrl = '/arrests/arrest/manage';
    this.confirmMass = 'ยืนยันการทำรายการหรือไม่?';
    this.goodService.currentData.subscribe(p => this.good = p);
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
