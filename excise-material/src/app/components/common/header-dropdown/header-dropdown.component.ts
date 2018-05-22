import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrls: ['./header-dropdown.component.scss']
})
export class HeaderDropdownComponent implements OnInit {

  jQuery: any = jQuery;

  constructor() { }

  ngOnInit() {
  }

  collapse(e): void {
    e.preventDefault();
    const ibox = jQuery(e.target).closest('div.card');
    const button = jQuery(e.target).closest('i');
    const content = ibox.children('.card-body');
    content.slideToggle(200);
    button.toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
    ibox.toggleClass('').toggleClass('border-bottom');
    setTimeout(function () {
      ibox.resize();
      ibox.find('[id^=map-]').resize();
    }, 50);

  }

}
