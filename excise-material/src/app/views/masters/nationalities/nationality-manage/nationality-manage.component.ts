import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NationalityModel } from '../../../../models/master';
import { NationalitiesService } from '../../../../services/master/nationalities.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as moment from 'moment';

@Component({
    selector: 'app-nationality-manage',
    templateUrl: './nationality-manage.component.html',
    styleUrls: ['./nationality-manage.component.scss'],
    providers: [
        NationalitiesService
    ]
})
export class NationalityManageComponent implements OnInit {

    modeTitle: string;
    mode: string;
    model: NationalityModel = new NationalityModel();
    currentUrl: string;
    confirmMass: string;
    completeMass: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _nationalityService: NationalitiesService
    ) { }

    ngOnInit() {
        this.currentUrl = '/masters/nationality/manage';
        this.confirmMass = 'ยืนยันการทำรายการหรือไม่?';
        this._route.queryParams
            .subscribe(param => {
                if (param && param.C) {
                    this.mode = 'c';
                    this.modeTitle = 'เพิ่มข้อมูล';

                } else if (param && param.R) {
                    this.mode = 'r';
                    this.modeTitle = 'รายละเอียดข้อมูล';

                } else if (param && param.U) {
                    this.mode = 'u';
                    this.modeTitle = 'แก้ไขข้อมูล';

                } else if (param && param.D) {
                    this.mode = 'd';
                    this.modeTitle = 'ลบข้อมูล';

                }
            });

    }

    onLoadData(nationalityId: string) {
        this._nationalityService.getByCon({ nationalityId })
            .subscribe(p => {
                this.model = p;
                this.model.effectiveDate = moment(p.effectiveDate).format('YYYY-MM-DD');
                this.model.eventDatetime = moment(p.eventDatetime).format('YYYY-MM-DD');
                this.model.expirationDate = moment(p.expirationDate).format('YYYY-MM-DD');
                this.model.isActive = p.isActive.toString();
            });

    }

    toEdit() {
        this._router.navigate([this.currentUrl], { queryParams: { U: true, nationalityId: '' } });
    }

    toPrint() {
        this._router.navigate([this.currentUrl], { queryParams: { P: true, nationalityId: '' } });
    }

    toDelete() {
        if (confirm(this.confirmMass)) {
            this.onDelete();
        }
    }

    cancel() {
        if (confirm(this.confirmMass)) {
            this.model = new NationalityModel();
        }
    }

    onSave() {
        if (confirm(this.confirmMass)) {

            if (this.mode === 'c') {
                this._nationalityService.insByCon(this.model)
                    .subscribe(
                        p => {
                            alert(this.completeMass);
                        }, (err: HttpErrorResponse) => {
                            alert(err.message);
                        }
                    );

            } else if (this.mode === 'u') {
                this._nationalityService.updByCon(this.model)
                    .subscribe(
                        p => {
                            alert(this.completeMass);
                        }, (err: HttpErrorResponse) => {
                            alert(err.message);
                        }
                    );
            }

        }
    }

    onDelete() {
        this._nationalityService.delByCon(this.model)
            .subscribe(
                p => {
                    alert(this.completeMass);
                }, (err: HttpErrorResponse) => {
                    alert(err.message);
                }
            );
    }

}
