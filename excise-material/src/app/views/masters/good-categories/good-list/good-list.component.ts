import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DutyGroupService } from '../../../../services/master';
import { DutyGroupModel } from '../../../../models/master';

import 'datatables.net';
import 'datatables.net-bs';

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

  dutyGroupModel: DutyGroupModel[];
  dataTable: any;
  constructor(
    private _router: Router,
    private chRef: ChangeDetectorRef,
    private _dutyGroupService: DutyGroupService
  ) { }

  ngOnInit() {
    this._dutyGroupService.getByKeyWord('')
      .subscribe(p => {
        console.log(p);
        // this.dutyGroupModel = p;

        // this.chRef.detectChanges();

        //  const table: any = $('table');
        //  this.dataTable = table.DataTable();
      });
  }

  onSearchByKey() {
    this._dutyGroupService.getByKeyWord('')
      .subscribe(p => {
        console.log(p);
        // this.dutyGroupModel = p;

        // this.chRef.detectChanges();

        //  const table: any = $('table');
        //  this.dataTable = table.DataTable();
      });
  }

  onSearchByCon() {
    this._dutyGroupService.getByCon('')
      .subscribe(p => {
        console.log(p);
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
