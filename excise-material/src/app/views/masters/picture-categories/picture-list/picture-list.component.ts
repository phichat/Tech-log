import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery;

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss']
})
export class PictureListComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  slideToggle(el) {
    jQuery(el).slideToggle();
  }

  createNew() {
    this._router.navigate(['/masters/picture/manage'], { queryParams: { C: true, goodId: 'NEW' } });
  }

  gotoManage(){
    this._router.navigate(['/masters/picture/manage'], { queryParams: { R: true, goodId: 'xx' } });
  }

}