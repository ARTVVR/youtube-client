import { Component } from '@angular/core';
import { KeyValue } from '@angular/common';
import FilterService from '../../../services/filter.service';
import { IItem, IStatistics } from '../../../interfaces/search-item.model';
import { KEY_WORD_FAVORITE_COUNT } from '../../../constants/constants';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss'],
})
export default class CardItemsComponent {
  db: IItem = this.filterService.data;

  infoCount: string[] = [];

  arrIcons: string[] = [
    'visibility',
    'thumb_up',
    'thumb_down',
    'question_answer',
  ];

  keysStatistics: IStatistics[] = [];

  constructor(private filterService: FilterService) {}

  onCompare(a: KeyValue<string, string>, b: KeyValue<string, string>): number {
    return a.key && b.key === KEY_WORD_FAVORITE_COUNT ? -1 : 1;
  }

  get data(): string {
    return this.filterService.dynamicFilter;
  }

  get filterDate() {
    return this.filterService.criterionKey;
  }
}
