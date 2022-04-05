import { Pipe, PipeTransform } from '@angular/core';
import { RootObject, IItem } from 'src/app/interfaces/search-item.model';

@Pipe({
  name: 'filterByKeyword',
})
export default class FilterByKeywordPipe implements PipeTransform {
  dataBase: RootObject[] = [];

  transform(value: any, searchStr: string): IItem {
    this.dataBase = value;
    return value.filter((val: IItem) => {
      return val.snippet.title
        .split(' ')
        .filter(
          (v: string) => v.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1
        )
        .join(' ');
    });
  }
}
