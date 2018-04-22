import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-investigate-report',
  templateUrl: './investigate-report.component.html',
  styleUrls: ['./investigate-report.component.scss']
})
export class InvestigateReportComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  slideToggle(el) {
    jQuery(el).slideToggle();
  }

  createNew() {
    this._router.navigate(['/investigate/investigate-report-manage'], { queryParams: { C: true, InvestigationID: 'NEW' } });
  }

}
