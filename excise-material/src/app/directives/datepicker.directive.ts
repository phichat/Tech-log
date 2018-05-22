import { Directive, ElementRef } from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective {

  constructor(el: ElementRef) {
    jQuery(el.nativeElement).datepicker({
      language: 'th',
      format: 'dd/mm/yyyy',
      todayHighlight: true
    });
  }

}
