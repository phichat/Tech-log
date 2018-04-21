import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notice-manage',
  templateUrl: './notice-manage.component.html',
  styleUrls: ['./notice-manage.component.scss']
})
export class NoticeManageComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  private mode: string;

  ngOnInit() {
    this._route.queryParams
        .subscribe(param => {
            if (param && param.C) {
                this.mode = 'c';
            } else if (param && param.R) {
                this.mode = 'r';
            } else if (param && param.U) {
                this.mode = 'u';
            }
        });
}

}
