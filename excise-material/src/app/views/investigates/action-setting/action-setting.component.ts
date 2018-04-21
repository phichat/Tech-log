import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-action-setting',
  templateUrl: './action-setting.component.html',
  styleUrls: ['./action-setting.component.scss']
})
export class ActionSettingComponent implements OnInit {

  constructor(private _router: Router) { }


  ngOnInit() {
  }

  edit() {
    this._router.navigate(['/investigate/notice-manage'], { queryParams: { U: true, NoticeCode: '' } });
  }

  print() {
    this._router.navigate(['/investigate/notice-manage'], { queryParams: { P: true, NoticeCode: '' } });
  }

  delete() {
    this._router.navigate(['/investigate/notice-manage'], { queryParams: { D: true, NoticeCode: '' } });
  }

  slideToggle(e) {
    const action = jQuery(e.target).closest('div.action-setting');
    const button = jQuery(e.target).closest('i');
    action.find('ul.tools').slideToggle();
    button.toggleClass('i-rotate');
  }

}
