import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RaceModel } from '../../../../models/master';
import { RacesService } from '../../../../services/master/races.service';
import * as moment from 'moment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-race-manage',
    templateUrl: './race-manage.component.html',
    styleUrls: ['./race-manage.component.scss'],
    providers: [
        RacesService
    ]
})
export class RaceManageComponent implements OnInit {

    modeTitle: string;
    mode: string;
    model: RaceModel = new RaceModel();
    currentUrl: string;
    confirmMass: string;
    completeMass: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _raceService: RacesService
    ) { }

    ngOnInit() {
        this.currentUrl = '/masters/nationality/manage';
        this.confirmMass = 'ยืนยันการทำรายการหรือไม่?';
        this.completeMass = 'บันทึกสำเร็จ';

        this._route.queryParams
            .subscribe(param => {
                if (param && param.C) {
                    this.mode = 'c';
                    this.modeTitle = 'เพิ่มข้อมูล';

                } else if (param && param.R) {
                    this.mode = 'r';
                    this.modeTitle = 'รายละเอียดข้อมูล';
                    this.onLoadData(param.raceId);

                } else if (param && param.U) {
                    this.mode = 'u';
                    this.modeTitle = 'แก้ไขข้อมูล';
                    this.onLoadData(param.raceId);

                } else if (param && param.D) {
                    this.mode = 'd';
                    this.modeTitle = 'ลบข้อมูล';
                    this.onLoadData(param.raceId);

                }
            });

    }

    onLoadData(raceId: number) {
        this._raceService.getByCon({ raceId })
            .subscribe(p => {
                this.model = p;
                this.model.eventDatetime = moment(p.eventDatetime).format('YYYY-MM-DD');
                this.model.isActive = p.isActive.toString();
            }, (err: HttpErrorResponse) => {
                alert(err.message);
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
            this.model = new RaceModel();
        }
    }

    save() {
        if (confirm(this.confirmMass)) {
            if (this.mode === 'c') {
                this._raceService.insByCon(this.model)
                    .subscribe(p => {
                        alert(this.completeMass);
                    }, (err: HttpErrorResponse) => {
                        alert(err.message);
                    });
            } else if (this.mode === 'u') {
                this._raceService.updByCon(this.model)
                    .subscribe(p => {
                        alert(this.completeMass);
                    }, (err: HttpErrorResponse) => {
                        alert(err.message);
                    });
            }
        }
    }

    onDelete() {
        this._raceService.delByCon(this.model)
            .subscribe(
                p => {
                    alert(this.completeMass);
                }, (err: HttpErrorResponse) => {
                    alert(err.message);
                }
            );
    }
}
