import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  slideToggle(el) {
    jQuery(el).slideToggle();
  }

  createNew() {
    this._router.navigate(['/investigate/notice/manage'], { queryParams: { C: true, noticeCode: 'NEW' } });
  }

  gotoManage(){
    this._router.navigate(['/investigate/notice/manage'], { queryParams: { R: true, noticeCode: 'XX-XXX' } });
  }

}
