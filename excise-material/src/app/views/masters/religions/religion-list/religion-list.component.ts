import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReligionsService } from '../../../../services/master/religions.service';
import { ReligionModel } from '../../../../models/master';

declare var jQuery;

@Component({
  selector: 'app-religion-list',
  templateUrl: './religion-list.component.html',
  styleUrls: ['./religion-list.component.scss']
})
export class ReligionListComponent implements OnInit {

  listReligion: Array<ReligionModel>;

  constructor(
    private _router: Router,
    private _religion: ReligionsService
  ) { }

  ngOnInit() {
    this._religion
      .getByKeyWord('')
      .subscribe(p =>  {
        this.listReligion = p
      });
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
