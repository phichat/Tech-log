import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-action-setting',
  templateUrl: './action-setting.component.html',
  styleUrls: ['./action-setting.component.scss']
})
export class ActionSettingComponent implements OnInit {

  constructor() { }

  jQuery: any = jQuery;

  ngOnInit() {
  }

  slideToggle(el) {
    this.jQuery(el).slideToggle();
  }
}
