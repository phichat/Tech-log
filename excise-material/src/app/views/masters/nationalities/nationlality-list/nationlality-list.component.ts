import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NationalityModel } from '../../../../models/master';

declare var jQuery;

@Component({
  selector: 'app-nationlality-list',
  templateUrl: './nationlality-list.component.html',
  styleUrls: ['./nationlality-list.component.scss']
})
export class NationlalityListComponent implements OnInit {

  nationalitie = new Array<NationalityModel>();

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  slideToggle(el) {
    jQuery(el).slideToggle();
  }

  createNew() {
    this._router.navigate(['/masters/nationality/manage'], { queryParams: { C: true, nationalityCode: 'NEW' } });
  }

  gotoManage() {
    this._router.navigate(['/masters/nationality/manage'], { queryParams: { R: true, nationalityCode: 'xx' } });
  }

  gotoEdit(id) {
    this._router.navigate(['/masters/nationality/manage'], { queryParams: { U: true, nationalityCode: id } });
  }

  gotoDelete(id) {
    this._router.navigate(['/masters/nationality/manage'], { queryParams: { D: true, nationalityCode: id } });
  }

}
