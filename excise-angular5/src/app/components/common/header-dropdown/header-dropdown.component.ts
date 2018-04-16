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

  slideToggle(e) {
    const card = jQuery(e.target).closest('div.card');
    const button = jQuery(e.target).closest('i');
    const content = card.children('div.body');
    content.slideToggle(200);
    button.toggleClass('i-rotate');
    card.toggleClass('').toggleClass('border-bottom');

  }

}
