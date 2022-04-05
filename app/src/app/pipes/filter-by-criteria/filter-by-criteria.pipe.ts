import { Pipe, PipeTransform } from '@angular/core';
import { RootObject } from 'src/app/interfaces/search-item.model';
import {
  KEY_WORD_COUNT_OF_VIEWS,
  KEY_WORD_DATE,
} from '../../constants/constants';

@Pipe({
  name: 'filterByCriteria',
})
export default class FilterByCriteria implements PipeTransform {
  dataBase: RootObject[] = [];

  transform(value: any, args: string): any {
    this.dataBase = value;
    return value.sort((a: any, b: any) => {
      switch (args) {
        case KEY_WORD_DATE:
          return new Date(a.snippet.publishedAt) >
            new Date(b.snippet.publishedAt)
            ? 1
            : -1;
        case KEY_WORD_COUNT_OF_VIEWS:
          return (
            Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
          );
        default:
          return value;
      }
    });
  }
}
