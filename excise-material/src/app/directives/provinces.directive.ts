import { Directive, ElementRef, OnInit } from '@angular/core';

import { TestTypehead } from '../models/test-typehead';

declare var jQuery: any;
declare var Bloodhound: any;

@Directive({
  selector: '[appProvinces]'
})
export class ProvincesDirective {

  constructor(el: ElementRef) {
    jQuery(el.nativeElement).selectize({
      create: false,
      valueField: 'value',
      labelField: 'text',
      sortField: 'text',
      options: [
        {value: '1', text: '1'},
        {value: '2', text: '2'},
        {value: '3', text: '3'},
        {value: '4', text: '4'}
      ]
    });
    // const bestPictures = new Bloodhound({
    //   datumTokenizer: Bloodhound.tokenizers.whitespace,
    //   queryTokenizer: Bloodhound.tokenizers.whitespace,
    //   local: TestTypehead
    // });

    // jQuery(el.nativeElement).typeahead({
    //   hint: true,
    //   highlight: true,
    //   minLength: 1
    // },
    //   {
    //     name: 'states',
    //     source: bestPictures
    //   });
  }


}
