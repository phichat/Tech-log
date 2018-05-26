import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';
import { RaceModel } from '../../../../models/master';
import { RacesService } from '../../../../services/master/races.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-race-list',
    templateUrl: './race-list.component.html',
    styleUrls: ['./race-list.component.scss'],
    providers: [
        RacesService
    ]
})
export class RaceListComponent implements OnInit {

    model = new Array<RaceModel>();
    dataTable: any;
    constructor(
        private _router: Router,
        private _raceService: RacesService,
        private chRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this._raceService.getByKeyWord({ 'keyword': '' })
            .subscribe(p => {
                this.model = p;
            }, (err: HttpErrorResponse) => {
                alert(err.message);
            });
    }

    onSearchByKey(key: any) {
        this._raceService.getByKeyWord(key)
            .subscribe(p => {
                this.model = new Array<RaceModel>();
                this.model = p;

                this.onDetactTable();
            }, (err: HttpErrorResponse) => {
                alert(err.message);
            });
    }

    onSearchByCon(con: any) {
        this._raceService.getByCon(con)
            .subscribe(p => {
                this.model = new Array<RaceModel>();
                this.model.push(p);

                this.onDetactTable();
            }, (err: HttpErrorResponse) => {
                alert(err.message);
            });
    }

    onDetactTable() {
        const table: any = $('table#race');

        if ($.fn.dataTable.isDataTable('table#race')) {

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
        this._router.navigate(['/masters/race/manage'], { queryParams: { C: true, raceId: 'NEW' } });
    }

    gotoManage(id) {
        this._router.navigate(['/masters/race/manage'], { queryParams: { R: true, raceId: id } });
    }

    gotoEdit(id) {
        this._router.navigate(['/masters/race/manage'], { queryParams: { U: true, raceId: id } });
    }

    gotoDelete(id) {
        this._router.navigate(['/masters/race/manage'], { queryParams: { D: true, raceId: id } });
    }

}
