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
    this._router.navigate(['/masters/relationship/manage'], { queryParams: { C: true, goodId: 'NEW' } });
  }

  gotoManage(){
    this._router.navigate(['/masters/relationship/manage'], { queryParams: { R: true, goodId: 'xx' } });
  }
}