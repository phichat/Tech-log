import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery;

@Component({
  selector: 'app-religion-list',
  templateUrl: './religion-list.component.html',
  styleUrls: ['./religion-list.component.scss']
})
export class ReligionListComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  slideToggle(el) {
    jQuery(el).slideToggle();
  }

  createNew() {
    this._router.navigate(['/masters/religion/manage'], { queryParams: { C: true, religionId: 'NEW' } });
  }

  gotoManage() {
    this._router.navigate(['/masters/religion/manage'], { queryParams: { R: true, religionId: 'xx' } });
  }

  gotoEdit(id) {
    this._router.navigate(['/masters/religion/manage'], { queryParams: { U: true, religionId: id } });
  }

  gotoDelete(id) {
    confirm('ต้องการลบข้อมูลหรือไม่?');
  }

}
