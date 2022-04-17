import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewChecked,
} from '@angular/core';
import { IItem } from 'src/app/interfaces/search-item.model';
import DataService from 'src/app/services/data.service';

@Component({
  selector: 'app-search',

  templateUrl: './search.component.html',

  styleUrls: ['./search.component.scss'],
})
export default class SearchComponent implements AfterViewChecked {
  @ViewChildren('colorFrame')
  postingPeriod: QueryList<ElementRef> | undefined;

  public videoData: IItem[] = [];

  constructor(public dataService: DataService) {
    this.getVideoData();
  }

  ngAfterViewChecked(): void {
    if (this.postingPeriod) {
      for (const item of this.postingPeriod) {
        item.nativeElement.style.borderColor = this.dataService.colorValue;
      }
    }
  }

  private async getVideoData(): Promise<void> {
    this.videoData = await DataService.getVideoData();
  }
}
