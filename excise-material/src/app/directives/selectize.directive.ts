import { Directive, ElementRef } from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[appSelectize]'
})
export class SelectizeDirective {

  constructor(el: ElementRef) {
    jQuery(el.nativeElement).selectize({
      create: false
    });
  }

}
