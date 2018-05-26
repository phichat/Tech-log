import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelationInterface } from '../../../../interfaces/master';
import { RelationModel } from '../../../../models/master';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { RelationshipsService } from '../../../../services/master';
import * as moment from 'moment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-relationship-manage',
    templateUrl: './relationship-manage.component.html',
    styleUrls: ['./relationship-manage.component.scss'],
    providers: [
        RelationshipsService
    ]
})

export class RelationshipManageComponent implements OnInit {

    mode: string;
    modeTitle: string;
    currentUrl: string;
    confirmMass: string;
    completeMass: string;
    model = new RelationModel();

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _builder: FormBuilder,
        private _relationService: RelationshipsService
    ) { }

    ngOnInit() {
        this.currentUrl = '/masters/relationship/manage';
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
                    this.onLoadData(param.relationId);

                } else if (param && param.U) {
                    this.mode = 'u';
                    this.modeTitle = 'แก้ไขข้อมูล';
                    this.onLoadData(param.relationId);

                } else if (param && param.D) {
                    this.mode = 'd';
                    this.modeTitle = 'ลบข้อมูล';
                    this.onLoadData(param.relationId);
                }
            });

    }

    onLoadData(relationId: string) {
        this._relationService.getByCon({ relationId })
            .subscribe(p => {
                this.model = p;
                this.model.eventDateTime = moment(p.eventDateTime).format('YYYY-MM-DD');
                this.model.isActive = p.isActive.toString();
            });

    }

    toEdit() {
        this._router.navigate([this.currentUrl], { queryParams: { U: true, relationId: this.model.relationId } });
    }

    toPrint() {
        this._router.navigate([this.currentUrl], { queryParams: { P: true, relationId: this.model.relationId } });
    }

    toDelete() {
        if (confirm(this.confirmMass)) {
            this.onDelete();
        }
    }

    cancel() {
        if (confirm(this.confirmMass)) {
            this.model = new RelationModel();
        }
    }

    onSave() {
        if (confirm(this.confirmMass)) {

            if (this.mode === 'c') {
                this._relationService.insByCon(this.model)
                    .subscribe(
                        p => {
                            alert(this.completeMass);
                        }, (err: HttpErrorResponse) => {
                            alert(err.message);
                        }
                    );

            } else if (this.mode === 'u') {
                this._relationService.updByCon(this.model)
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
        this._relationService.delByCon(this.model)
            .subscribe(
                p => {
                    alert(this.completeMass);
                }, (err: HttpErrorResponse) => {
                    alert(err.message);
                }
            );
    }
}
