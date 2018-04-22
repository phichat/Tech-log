import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-action-setting',
  templateUrl: './action-setting.component.html',
  styleUrls: ['./action-setting.component.scss']
})
export class ActionSettingComponent implements OnInit {

  @Output() btnEdit = new EventEmitter();
  @Output() btnPrint = new EventEmitter();
  @Output() btnDelete = new EventEmitter();
  constructor(private _router: Router) { }

  currentUrl: string;

  ngOnInit() {
    this.currentUrl = this._router.url;
  }
  edit(e) {
    this.btnEdit.emit(e);
  }

  print(e) {
    this.btnPrint.emit(e);
    // this._router.navigate([this.currentUrl], { queryParams: { P: true, NoticeCode: '' } });
  }

  delete(e) {
    this.btnDelete.emit(e);
    // this._router.navigate([this.currentUrl], { queryParams: { D: true, NoticeCode: '' } });
  }

  slideToggle(e) {
    // this.outSlideToggle.emit(e);
    // console.log(e);
    const action = jQuery(e.target).closest('div.action-setting');
    const button = jQuery(e.target).closest('i');
    action.find('ul.tools').slideToggle();
    button.toggleClass('i-rotate');
  }
}
