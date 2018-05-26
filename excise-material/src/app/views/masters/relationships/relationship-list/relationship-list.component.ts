import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RelationshipsService } from '../../../../services/master';
import { RelationModel } from '../../../../models/master';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-relationship-list',
    templateUrl: './relationship-list.component.html',
    styleUrls: ['./relationship-list.component.scss'],
    providers: [
        RelationshipsService
    ]
})
export class RelationshipListComponent implements OnInit {

    listRelation: Array<RelationModel>;
    keySearch: string;
    conSearch: RelationModel;
    dataTable: any;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private chRef: ChangeDetectorRef,
        private _relationService: RelationshipsService
    ) { }

    ngOnInit() {
        this._relationService
            .getByKeyWord({ 'keyword': '' })
            .subscribe(p => {
                this.listRelation = p;

                this.onDetactTable();
            });
    }

    onSearchByKey(key: any) {
        this.listRelation = [];

        this._relationService
            .getByKeyWord(key)
            .subscribe(p => {
                this.listRelation = p;

                this.onDetactTable();
            });
    }

    onSearchByCon(con: any) {
        // this.listRelation = [];

        // this._relationService.getByCon(con)
        //     .subscribe(p => {
        //         this.listRelation = p;

        //         this.onDetactTable();
        //     });
    }

    onDetactTable() {
        const table: any = $('#tableRelation');

        this.chRef.detectChanges();

        if ($.fn.dataTable.isDataTable('#tableRelation')) {

            this.dataTable = table.DataTable();

        } else {

            this.dataTable = table.DataTable({
                'searching': false,
                'sDom': 'rt<"row"<"col-md-6"i><"col-md-6"fp>>',
                'language': {
                    'sProcessing': 'กำลังดำเนินการ...',
                    'sLengthMenu': 'แสดง _MENU_ แถว',
                    'sZeroRecords': 'ไม่พบข้อมูล',
                    'sInfo': 'รายการที่ _START_ ถึง _END_ จาก _TOTAL_ รายการ',
                    'sInfoEmpty': 'แสดง 0 ถึง 0 จาก 0 แถว',
                    'sInfoFiltered': '(กรองข้อมูล _MAX_ ทุกแถว)',
                    'sInfoPostFix': '',
                    'sSearch': 'ค้นหา: ',
                    'sUrl': '',
                    'oPaginate': {
                        'sFirst': 'หน้าแรก',
                        'sPrevious': 'ก่อนหน้า',
                        'sNext': 'ถัดไป',
                        'sLast': 'หน้าสุดท้าย'
                    }
                }
            });
        }


    }

    slideToggle(el) {
        $(el).slideToggle();
    }

    createNew() {
        this._router.navigate(['/masters/relationship/manage'], { queryParams: { C: true, relationId: 'NEW' } });
    }

    gotoManage() {
        this._router.navigate(['/masters/relationship/manage'], { queryParams: { R: true, relationId: 'xx' } });
    }



    gotoEdit(id) {
        this._router.navigate(['/masters/relationship/manage'], { queryParams: { U: true, relationId: id } });
    }

    gotoDelete(id) {
        if (confirm('ต้องการลบข้อมูลหรือไม่?')) {
            this._relationService.delByCon(id)
                .subscribe(
                    p => {
                        alert('บันทึกสำเร็จ');
                    }, (err: HttpErrorResponse) => {
                        alert(err.message);
                    }
                );
        }
    }
}
