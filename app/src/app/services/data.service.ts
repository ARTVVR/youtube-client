import { Injectable } from '@angular/core';
import { IItem, RootObject } from '../interfaces/search-item.model';
import { URL } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export default class DataService {
  public inputValue: string = '';

  public filterValue: string = '';

  public colorValue: string = '';

  public isVisible: boolean = false;

  public isReverseSort: boolean = false;

  public static async getVideoData(): Promise<IItem[]> {
    const videoData = await fetch(URL)
      .then((response: Response) => response.json())
      .then((data: RootObject) => data.items);
    return videoData;
  }
}
