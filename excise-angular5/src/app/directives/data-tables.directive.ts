import { Directive, ElementRef } from '@angular/core';
import 'datatables.net';
import 'datatables.net-bs4';

declare var jQuery: any;

@Directive({
  selector: '[appDataTables]'
})
export class DataTablesDirective {

  jQuery: any = jQuery;
  table: any;

  constructor() {
  }

  ngAfterViewInit() {
    this.table = document.querySelector('table');
    jQuery(this.table).DataTable({
      'searching': false,
      // "scrollX": true,
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