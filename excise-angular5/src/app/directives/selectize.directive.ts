import { Directive, ElementRef } from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[appSelectize]'
})
export class SelectizeDirective {

  jQuery: any = jQuery;

  constructor(el: ElementRef) {
    this.jQuery(el.nativeElement).selectize({
      create: false,
      sortField: 'text'
    });
  }

}
