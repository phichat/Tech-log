import { Component, OnInit } from '@angular/core';
import { ProvinceModel } from './province.model';

declare var jQuery: any;

@Component({
  selector: 'app-selectize-province',
  templateUrl: './selectize-province.component.html',
  styleUrls: ['./selectize-province.component.scss']
})
export class SelectizeProvinceComponent implements OnInit {

  jQuery: any = jQuery;

  // model = new ProvinceModel('', '');

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    jQuery('select').selectize({
      create: false,
      sortField: 'text',
    });
  }

}
