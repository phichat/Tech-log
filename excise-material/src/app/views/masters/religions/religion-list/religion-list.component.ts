import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ReligionsService } from '../../../../services/master/religions.service';
import { ReligionModel } from '../../../../models/master';
import { HttpErrorResponse } from '@angular/common/http';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';

@Component({
    selector: 'app-religion-list',
    templateUrl: './religion-list.component.html',
    styleUrls: ['./religion-list.component.scss'],
    providers: [
        ReligionsService
    ]
})
export class ReligionListComponent implements OnInit {

    listReligion = new Array<ReligionModel>();
    dataTable: any;
    constructor(
        private _router: Router,
        private _religion: ReligionsService,
        private chRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this._religion
            .getByKeyWord({ 'keyword': '' })
            .subscribe(p => {
                this.listReligion = p;

                this.onDetactTable();
            });
    }

    onSearchByKey(key: any) {

        this._religion
            .getByKeyWord(key)
            .subscribe(p => {
                this.listReligion = p;

                this.onDetactTable();
            });
    }

    onSearchByCon(con: any) {
        this._religion
            .getByCon(con)
            .subscribe(p => {
                this.listReligion = new Array<ReligionModel>();

                this.listReligion.push(p);

                this.onDetactTable();
            });
    }

    onDetactTable() {
        const table: any = $('table#religion');

        if ($.fn.dataTable.isDataTable('table#religion')) {

            this.dataTable = table.DataTable();
            this.dataTable.destroy();
        }

        this.chRef.detectChanges();

        this.dataTable = table.DataTable({
            'searching': false,
            saveState: false,
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

    slideToggle(el) {
        $(el).slideToggle();
    }

    createNew() {
        this._router.navigate(['/masters/religion/manage'], { queryParams: { C: true, religionId: 'NEW' } });
    }

    gotoManage(id) {
        this._router.navigate(['/masters/religion/manage'], { queryParams: { R: true, religionId: id } });
    }

    gotoEdit(id) {
        this._router.navigate(['/masters/religion/manage'], { queryParams: { U: true, religionId: id } });
    }

    gotoDelete(id) {
        this._router.navigate(['/masters/religion/manage'], { queryParams: { D: true, religionId: id } });
    }

}
