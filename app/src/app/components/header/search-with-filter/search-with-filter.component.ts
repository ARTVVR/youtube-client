import { Component } from '@angular/core';
import FilterService from 'src/app/services/filter.service';
import divTrigger from 'src/app/app.animations';

@Component({
  selector: 'app-search-with-filter',

  templateUrl: './search-with-filter.component.html',

  styleUrls: ['./search-with-filter.component.scss'],

  animations: [divTrigger],
})
export default class SearchWithFilterComponent {
  sortOfWords: string[] = ['date', 'count of views'];

  isVisible: boolean = false;

  constructor(private filterService: FilterService) {}

  set filterByValue(value: string) {
    this.filterService.dynamicFilter = value;
  }

  sortByDate(value: string): void {
    this.filterService.criterionKey = value;
  }

  changeVisibility() {
    this.filterService.visibleCardItems = true;
  }
}
