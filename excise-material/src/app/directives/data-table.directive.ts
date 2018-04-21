import { Directive, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Directive({
  selector: '[appDataTable]'
})
export class DataTableDirective implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const table = document.querySelector('table');
    jQuery(table).DataTable({
      'searching': false,
      // 'ordering': false,
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
      },
      // 'scrollX': true
    });
  }

}
