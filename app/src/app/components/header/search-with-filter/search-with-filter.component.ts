import { Component } from '@angular/core';

import divTrigger from 'src/app/app.animations';

@Component({
  selector: 'app-search-with-filter',

  templateUrl: './search-with-filter.component.html',

  styleUrls: ['./search-with-filter.component.scss'],

  animations: [divTrigger],
})
export default class SearchWithFilterComponent {
  sortOfWords: string[] = [
    'Sorting by:',
    'date',
    'count of views',
    'by word or sentance',
  ];

  isVisible: boolean = false;
}
