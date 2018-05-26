import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReligionsService } from '../../../../services/master/religions.service';
import { ReligionModel } from '../../../../models/master';
import { HttpErrorResponse } from '@angular/common/http';
import * as moment from 'moment';

@Component({
    selector: 'app-religion-manage',
    templateUrl: './religion-manage.component.html',
    styleUrls: ['./religion-manage.component.scss'],
    providers: [
        ReligionsService
    ]
})
export class ReligionManageComponent implements OnInit {

    modeTitle: string;
    mode: string;
    model = new ReligionModel();
    currentUrl: string;
    prevUrl: string;
    confirmMass: string;
    completeMass: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _religionService: ReligionsService,
        private chRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.currentUrl = '/masters/religion/manage';
        this.prevUrl = '/masters/religion/list';
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
                    this.onLoadData(param.religionId);

                } else if (param && param.U) {
                    this.mode = 'u';
                    this.modeTitle = 'แก้ไขข้อมูล';
                    this.onLoadData(param.religionId);

                } else if (param && param.D) {
                    this.mode = 'd';
                    this.modeTitle = 'ลบข้อมูล';
                    this.onLoadData(param.religionId);
                }
            });

    }

    onLoadData(religionId: number) {
        this._religionService.getByCon({ religionId })
            .subscribe(
                p => {
                    this.model = p;
                    this.model.eventDatetime = moment(p.eventDatetime).format('YYYY-MM-DD');
                    this.model.isActive = p.isActive.toString();

                }, (err: HttpErrorResponse) => {
                    alert(err.message);
                }
            );
    }

    toEdit() {
        this._router.navigate([this.currentUrl], { queryParams: { U: true, religionId: this.model.religionId } });
    }

    toPrint() {
        this._router.navigate([this.currentUrl], { queryParams: { P: true, religionId: this.model.religionId } });
    }

    toDelete() {
        if (confirm(this.confirmMass)) {
            this.onDelete();
        }
    }

    cancel() {
        if (confirm(this.confirmMass)) {
            this.model = new ReligionModel();
        }
    }

    onDelete() {
        this._religionService.delByCon(this.model)
            .subscribe(p => {
                alert(this.completeMass);

            }, (err: HttpErrorResponse) => {
                alert(err.message);
            });
    }

    onSave() {
        if (confirm(this.confirmMass)) {
            if (this.mode === 'c') {
                this._religionService.insByCon(this.model)
                    .subscribe(p => {
                        alert(this.completeMass);
                    }, (err: HttpErrorResponse) => {
                        alert(err.message);
                    });
            } else if (this.mode === 'u') {
                this._religionService.updByCon(this.model)
                    .subscribe(p => {
                        alert(this.completeMass);
                    }, (err: HttpErrorResponse) => {
                        alert(err.message);
                    });
            }

        }
    }
}
