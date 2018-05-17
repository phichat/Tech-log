import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery;

@Component({
  selector: 'app-nationlality-list',
  templateUrl: './nationlality-list.component.html',
  styleUrls: ['./nationlality-list.component.scss']
})
export class NationlalityListComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  slideToggle(el) {
    jQuery(el).slideToggle();
  }

  createNew() {
    this._router.navigate(['/masters/nationality/manage'], { queryParams: { C: true, goodId: 'NEW' } });
  }

  gotoManage(){
    this._router.navigate(['/masters/nationality/manage'], { queryParams: { R: true, goodId: 'xx' } });
  }

}
