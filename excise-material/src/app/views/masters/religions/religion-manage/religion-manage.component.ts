import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-religion-manage',
  templateUrl: './religion-manage.component.html',
  styleUrls: ['./religion-manage.component.scss']
})
export class ReligionManageComponent implements OnInit {

  modeTitle: string;
  mode: string;
  currentUrl: string;
  confirmMass: string;

  constructor(
     private _route: ActivatedRoute,
     private _router: Router
  ) { }

  ngOnInit() {
     this.currentUrl = '/masters/religion/manage';
     this.confirmMass = 'ยืนยันการทำรายการหรือไม่?';
     this._route.queryParams
        .subscribe(param => {
           if (param && param.C) {
              this.mode = 'c';
              this.modeTitle = 'เพิ่มข้อมูล'

           } else if (param && param.R) {
              this.mode = 'r';
              this.modeTitle = 'รายละเอียดข้อมูล'

           } else if (param && param.U) {
              this.mode = 'u';
              this.modeTitle = 'แก้ไขข้อมูล'

           } else if (param && param.D) {
              this.mode = 'd';
              this.modeTitle = 'ลบข้อมูล'
              if (confirm(this.confirmMass)) {

              } else {
                 this._router.navigate([this.currentUrl], { queryParams: { R: true, religionId: '' } });
              }
           }
        });

  }

  toEdit() {
     this._router.navigate([this.currentUrl], { queryParams: { U: true, religionId: '' } });
  }

  toPrint() {
     this._router.navigate([this.currentUrl], { queryParams: { P: true, religionId: '' } });
  }

  toDelete() {
     this._router.navigate([this.currentUrl], { queryParams: { D: true, religionId: '' } });
  }

  cancel() {
     if (confirm(this.confirmMass)) {

     }
  }

  save() {
     if (confirm(this.confirmMass)) {

     }
  }
}
