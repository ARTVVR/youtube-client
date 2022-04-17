import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from 'src/app/interfaces/search-item.model';

@Pipe({
  name: 'filterByKeyword',
})
export default class FilterByKeywordPipe implements PipeTransform {
  private videoData: IItem[] = [];

  public transform(videoData: IItem[], searchStr: string): IItem[] {
    this.videoData = videoData.filter((item: IItem): string => {
      return item.snippet.title
        .split(' ')
        .filter(
          (v: string): boolean =>
            v.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1
        )
        .join(' ');
    });
    return this.videoData;
  }
}
