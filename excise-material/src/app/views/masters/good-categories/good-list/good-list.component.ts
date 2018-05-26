import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DutyGroupService } from '../../../../services/master';
import { DutyGroupModel } from '../../../../models/master';

import 'datatables.net';
import 'datatables.net-bs';
import { HttpErrorResponse } from '@angular/common/http';

declare var $;

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.scss'],
  providers: [
    DutyGroupService
  ]
})
export class GoodListComponent implements OnInit {

  dutyGroupModel = new Array<DutyGroupModel>();
  dataTable: any;
  constructor(
    private _router: Router,
    private chRef: ChangeDetectorRef,
    private _dutyGroupService: DutyGroupService
  ) { }

  ngOnInit() {
    // this._dutyGroupService.getByKeyWord({ 'keyword': '' })
    //     .subscribe(p => {
    //         this.dutyGroupModel = p;
    //     }, (err: HttpErrorResponse) => {
    //         alert(err.message);
    //     });
}

onSearchByKey(key: any) {
    this._dutyGroupService.getByKeyWord(key)
        .subscribe(p => {
            this.dutyGroupModel = new Array<DutyGroupModel>();
            this.dutyGroupModel = p;

            this.onDetactTable();
        }, (err: HttpErrorResponse) => {
            alert(err.message);
        });
}

onSearchByCon(con: any) {
    this._dutyGroupService.getByCon(con)
        .subscribe(p => {
            this.dutyGroupModel = new Array<DutyGroupModel>();
            this.dutyGroupModel.push(p);

            this.onDetactTable();
        }, (err: HttpErrorResponse) => {
            alert(err.message);
        });
}

onDetactTable() {
    const table: any = $('table');

    if ($.fn.dataTable.isDataTable('table')) {

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
    this._router.navigate(['/masters/good/manage'], { queryParams: { C: true, groupCode: 'NEW' } });
  }

  gotoManage() {
    this._router.navigate(['/masters/good/manage'], { queryParams: { R: true, groupCode: 'xx' } });
  }

  gotoEdit(id) {
    this._router.navigate(['/masters/good/manage'], { queryParams: { U: true, groupCode: id } });
  }

  gotoDelete(id) {
    confirm('ต้องการลบข้อมูลหรือไม่?');
  }
}
