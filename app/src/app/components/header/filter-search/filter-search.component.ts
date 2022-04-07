import { Component } from '@angular/core';
import DataService from 'src/app/services/data.service';
import divTrigger from 'src/app/app.animations';
import reverseValue from 'src/app/utils/utils';

@Component({
  selector: 'app-filter-search',

  templateUrl: './filter-search.component.html',

  styleUrls: ['./filter-search.component.scss'],

  animations: [divTrigger],
})
export default class FilterSearchComponent {
  sortOfWords: string[] = ['date', 'count of views'];

  isVisible: boolean = false;

  constructor(private dataService: DataService) {}

  public set filterByValue(value: string) {
    this.dataService.inputValue = value;
  }

  public sortByCriteria(value: string): void {
    if (this.dataService.isReverseSort) {
      this.dataService.filterValue = reverseValue(value);
      this.dataService.isReverseSort = false;
    } else {
      this.dataService.filterValue = value;
      this.dataService.isReverseSort = true;
    }
  }

  public changeToVisible(): void {
    this.dataService.isVisible = true;
  }
}
