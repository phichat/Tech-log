import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery;

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.scss']
})
export class GoodListComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  slideToggle(el) {
    jQuery(el).slideToggle();
  }

  createNew() {
    this._router.navigate(['/masters/good/manage'], { queryParams: { C: true, goodId: 'NEW' } });
  }

  gotoManage() {
    this._router.navigate(['/masters/good/manage'], { queryParams: { R: true, goodId: 'xx' } });
  }

  gotoEdit(id) {
    this._router.navigate(['/masters/good/manage'], { queryParams: { U: true, goodId: id } });
  }

  gotoDelete(id) {
    confirm('ต้องการลบข้อมูลหรือไม่?');
  }
}
