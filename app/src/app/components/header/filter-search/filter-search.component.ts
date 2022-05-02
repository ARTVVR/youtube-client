import { Component } from '@angular/core';
import DataService from 'src/app/services/data.service';
import divTrigger from 'src/app/app.animations';
import reverseValue from 'src/app/utils/utils';
import { Router } from '@angular/router';
import { IItem, RootObject } from 'src/app/interfaces/search-item.model';
import { MAX_VIDEOS, MINIMAL_SEARCH_LENGTH } from 'src/app/constants/constants';

@Component({
  selector: 'app-filter-search',

  templateUrl: './filter-search.component.html',

  styleUrls: ['./filter-search.component.scss'],

  animations: [divTrigger],
})
export default class FilterSearchComponent {
  public sortOfWords: string[] = ['date', 'count of views'];

  public isVisible: boolean = false;

  public searchValue: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  public set filterByValue(value: string) {
    this.dataService.inputValue = value;
  }

  public sortByCriteria(value: string): void {
    if (this.dataService.isReverseSort) {
      this.dataService.filterValue = reverseValue(value);
      this.dataService.isReverseSort = false;
    } else {
      this.dataService.filterValue = value;
      this.dataService.isReverseSort = true;
    }
  }

  public async getSearchedVideos(): Promise<void> {
    if (this.searchValue.length >= MINIMAL_SEARCH_LENGTH) {
      const currentValue: string = this.searchValue;
      const timeOut = setTimeout((): void => {
        if (currentValue === this.searchValue) {
          this.dataService
            .getYoutubeApi(this.searchValue)
            .subscribe((data: RootObject): void => {
              data.items.forEach((item: IItem): void => {
                this.dataService.videoIds.push(item.id.videoId);
              });
              this.removeExtraVideos(MAX_VIDEOS);
              this.dataService
                .getVideosData()
                .subscribe((videoData: RootObject): void => {
                  this.dataService.videoData = videoData.items;
                });
            });
          this.router.navigate(['/']);
        } else {
          clearTimeout(timeOut);
        }
      }, 3000);
    }
  }

  private removeExtraVideos(maxVideos: number): void {
    if (this.dataService.videoIds.length > maxVideos)
      this.dataService.videoIds.splice(0, maxVideos);
  }

  public changeToVisible(): void {
    this.dataService.isVisible = true;
  }
}
