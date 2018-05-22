import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery;

@Component({
  selector: 'app-relationship-list',
  templateUrl: './relationship-list.component.html',
  styleUrls: ['./relationship-list.component.scss']
})
export class RelationshipListComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  slideToggle(el) {
    jQuery(el).slideToggle();
  }

  createNew() {
    this._router.navigate(['/masters/relationship/manage'], { queryParams: { C: true, relationId: 'NEW' } });
  }

  gotoManage() {
    this._router.navigate(['/masters/relationship/manage'], { queryParams: { R: true, relationId: 'xx' } });
  }



  gotoEdit(id) {
    this._router.navigate(['/masters/relationship/manage'], { queryParams: { U: true, relationId: id } });
  }

  gotoDelete(id) {
    confirm('ต้องการลบข้อมูลหรือไม่?');
  }
}
