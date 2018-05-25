import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelationInterface } from '../../../../interfaces/master';
import { RelationModel } from '../../../../models/master';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-relationship-manage',
    templateUrl: './relationship-manage.component.html',
    styleUrls: ['./relationship-manage.component.scss']
})

export class RelationshipManageComponent implements OnInit, RelationInterface {

    mode: string;
    modeTitle: string;
    currentUrl: string;
    confirmMass: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _builder: FormBuilder
    ) { }

    model: RelationModel;
    Form: FormGroup = this._builder.group({
        relationId: [null, Validators.required],
        relationName: [null, Validators.required],
        isActive: [null, Validators.required],
        eventDateTime: [null, Validators.required]
    });

    ngOnInit() {
        this.currentUrl = '/masters/relationship/manage';
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
                    if (confirm(this.confirmMass)) {

                    } else {
                        this._router.navigate([this.currentUrl], { queryParams: { R: true, relationId: '' } });
                    }
                }
            });

    }

    onSubmit(form) {
        console.log(form);
    }

    toEdit() {
        this._router.navigate([this.currentUrl], { queryParams: { U: true, relationId: '' } });
    }

    toPrint() {
        this._router.navigate([this.currentUrl], { queryParams: { P: true, relationId: '' } });
    }

    toDelete() {
        this._router.navigate([this.currentUrl], { queryParams: { D: true, relationId: '' } });
    }

    cancel() {
        if (confirm(this.confirmMass)) {

        }
    }

    save() {
        if (this.Form.valid) {
            if (confirm(this.confirmMass)) {


            }
        }
    }
}
