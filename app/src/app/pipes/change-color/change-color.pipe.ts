import { Pipe, PipeTransform, ElementRef } from '@angular/core';
import DataService from 'src/app/services/data.service';
import { IItem } from '../../interfaces/search-item.model';
import {
  MILLISECONDS_IN_DAY,
  DAYS_IN_MONTH,
  DAYS_IN_WEEK,
  DAYS_IN_HALF_YEAR,
  BLACK_COLOR,
  BLUE_COLOR,
  GREEN_COLOR,
  RED_COLOR,
} from '../../constants/constants';

@Pipe({
  name: 'changeColor',
})
export default class ChangeColorPipe implements PipeTransform {
  constructor(private dataService: DataService) {}

  public transform(value: IItem, args: ElementRef): void {
    const intervalDate: number =
      Date.now() - Number(new Date(value.snippet.publishedAt)).valueOf();

    switch (!!args) {
      case intervalDate < MILLISECONDS_IN_DAY * DAYS_IN_MONTH:
        this.dataService.colorValue = GREEN_COLOR;
        break;
      case intervalDate < MILLISECONDS_IN_DAY * DAYS_IN_WEEK:
        this.dataService.colorValue = BLUE_COLOR;
        break;
      case intervalDate > MILLISECONDS_IN_DAY * DAYS_IN_HALF_YEAR:
        this.dataService.colorValue = RED_COLOR;
        break;
      default:
        this.dataService.colorValue = BLACK_COLOR;
        break;
    }
  }
}
