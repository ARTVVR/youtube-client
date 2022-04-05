import { Injectable } from '@angular/core';
import { RootObject } from '../interfaces/search-item.model';
import { URL } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export default class FilterService {
  dynamicFilter: string = '';

  criterionKey: string = '';

  visibleCardItems: boolean = false;

  data: any = this.getData();

  async getData() {
    this.data = await fetch(URL)
      .then((response: Response) => response.json())
      .then((dat: RootObject) => dat.items);

    return this.data;
  }
}
