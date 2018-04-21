import { Directive, ElementRef, OnInit } from '@angular/core';

import { TestTypehead } from '../models/test-typehead';

declare var jQuery: any;
declare var Bloodhound: any;

@Directive({
  selector: '[appProvinces]'
})
export class ProvincesDirective {

  constructor(el: ElementRef) {
    const bestPictures = new Bloodhound({
      // datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
      // queryTokenizer: Bloodhound.tokenizers.whitespace,
      // prefetch: 'https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json',
      // remote: {
      //   url: 'https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json',
      //   wildcard: '%QUERY'
      // }
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: TestTypehead
    });

    // jQuery(el.nativeElement).typeahead(null, {
    //   name: 'best-pictures',
    //   display: 'value',
    //   source: bestPictures
    // });
    jQuery(el.nativeElement).typeahead({
      // hint: true,
      highlight: true,
      minLength: 1
    },
      {
        name: 'states',
        source: bestPictures
      });

    console.log(TestTypehead);
  }


}
