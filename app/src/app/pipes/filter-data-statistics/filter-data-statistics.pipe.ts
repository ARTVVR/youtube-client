import { Pipe, PipeTransform } from '@angular/core';
import {
  LENGTH_THOUSAND,
  LENGTH_MILLION,
  NUMBER_DIGIT_LENGTH,
} from '../../constants/constants';
import { RootObject } from '../../interfaces/search-item.model';

@Pipe({
  name: 'filterDataStatisticsPipe',
})
export default class FilterDataStatisticsPipe implements PipeTransform {
  dataBase: RootObject[] = [];

  transform(value: any): any {
    this.dataBase = value;
    for (const item of value) {
      const x = item.value.length;

      if (x >= LENGTH_THOUSAND && x < LENGTH_MILLION) {
        item.value = `${item.value.slice(0, x - NUMBER_DIGIT_LENGTH)}k`;
      }

      if (x >= LENGTH_MILLION) {
        item.value = `${item.value.slice(
          0,
          item.value.length - NUMBER_DIGIT_LENGTH * 2
        )}m`;
      }
    }
    return value;
  }
}
