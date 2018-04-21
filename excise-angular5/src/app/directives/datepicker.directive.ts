import { Directive, ElementRef } from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective {

  jQuery: any = jQuery;

  constructor(el: ElementRef) {
    var popup = this.jQuery(el.nativeElement).offset();
    var popupTop = popup.top - 40;

    this.jQuery(el.nativeElement).datepicker({
      language: 'th',
      format: 'dd/mm/yyyy',
      todayHighlight: true
    });

  }
}
