import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/interfaces/search-item.model';
import FilterService from 'src/app/services/filter.service';

@Component({
  selector: 'app-search',

  templateUrl: './search.component.html',

  styleUrls: ['./search.component.scss'],
})
export default class SearchComponent implements OnInit {
  public dataBase: IItem[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.getDataBase();
  }

  private async getDataBase(): Promise<void> {
    this.dataBase = await FilterService.getData();
  }

  public get getVisibility(): boolean {
    return this.filterService.isVisible;
  }

  public get filterInputValue(): string {
    return this.filterService.inputValue;
  }

  public get filterDate(): string {
    return this.filterService.filterValue;
  }
}
