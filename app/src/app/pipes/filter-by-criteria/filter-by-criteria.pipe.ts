import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from 'src/app/interfaces/search-item.model';
import reverseValue from 'src/app/utils/utils';
import {
  VIEW_FILTER_VALUE,
  DATE_FILTER_VALUE,
} from '../../constants/constants';

@Pipe({
  name: 'filterByCriteria',
})
export default class FilterByCriteria implements PipeTransform {
  private videoData: IItem[] = [];

  public transform(videoData: IItem[], keyWord: string): IItem[] {
    this.videoData = videoData;
    videoData.sort((a: IItem, b: IItem): number => {
      switch (keyWord) {
        case DATE_FILTER_VALUE:
          return new Date(a.snippet.publishedAt) >
            new Date(b.snippet.publishedAt)
            ? 1
            : -1;
        case VIEW_FILTER_VALUE:
          return +b.statistics.viewCount - +a.statistics.viewCount;
        case reverseValue(DATE_FILTER_VALUE):
          return new Date(a.snippet.publishedAt) >
            new Date(b.snippet.publishedAt)
            ? -1
            : 1;
        case reverseValue(VIEW_FILTER_VALUE):
          return +a.statistics.viewCount - +b.statistics.viewCount;
        default:
          return 1;
      }
    });
    return this.videoData;
  }
}
