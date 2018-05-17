import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery;

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  slideToggle(el) {
    jQuery(el).slideToggle();
  }

  createNew() {
    this._router.navigate(['/masters/race/manage'], { queryParams: { C: true, raceId: 'NEW' } });
  }

  gotoManage() {
    this._router.navigate(['/masters/race/manage'], { queryParams: { R: true, raceId: 'xx' } });
  }

  gotoEdit(id) {
    this._router.navigate(['/masters/race/manage'], { queryParams: { U: true, raceId: id } });
  }

  gotoDelete(id) {
    alert('ต้องการลบข้อมูลหรือไม่?');
  }

}
