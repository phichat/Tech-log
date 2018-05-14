import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  @Input() open: boolean;

  constructor() { }

  ngOnInit() {
  }


}
