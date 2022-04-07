import { Component } from '@angular/core';
import FilterService from 'src/app/services/filter.service';
import divTrigger from 'src/app/app.animations';
import reverseValue from 'src/app/utils/utils';

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

  public set filterByValue(value: string) {
    this.filterService.inputValue = value;
  }

  public sortByCriteria(value: string): void {
    if (!this.filterService.isReverseSort) {
      this.filterService.filterValue = value;
      this.filterService.isReverseSort = true;
    } else {
      this.filterService.filterValue = reverseValue(value);
      this.filterService.isReverseSort = false;
    }
  }

  public changeVisibility(): void {
    this.filterService.isVisible = true;
  }
}
