import { Component, OnInit } from '@angular/core';


declare var jQuery: any;

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  constructor() { }

  jQuery: any = jQuery;

  table: any;

  ngOnInit() {
  }

  // ngAfterViewInit() {
  //   this.table = document.querySelector('table');
  //   jQuery(this.table).DataTable({
  //     'searching': false,
  //     'ordering': false,
  //     'language': {
  //       'sProcessing': 'กำลังดำเนินการ...',
  //       'sLengthMenu': 'แสดง _MENU_ แถว',
  //       'sZeroRecords': 'ไม่พบข้อมูล',
  //       'sInfo': 'รายการที่ _START_ ถึง _END_ จาก _TOTAL_ รายการ',
  //       'sInfoEmpty': 'แสดง 0 ถึง 0 จาก 0 แถว',
  //       'sInfoFiltered': '(กรองข้อมูล _MAX_ ทุกแถว)',
  //       'sInfoPostFix': '',
  //       'sSearch': 'ค้นหา: ',
  //       'sUrl': '',
  //       'oPaginate': {
  //         'sFirst': 'หน้าแรก',
  //         'sPrevious': 'ก่อนหน้า',
  //         'sNext': 'ถัดไป',
  //         'sLast': 'หน้าสุดท้าย'
  //       }
  //     }
  //   });
  // }

  slideToggle(el) {
    jQuery(el).slideToggle();
  }

}
