import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { IItem } from 'src/app/interfaces/search-item.model';
import DataService from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export default class SearchComponent implements OnInit {
  @ViewChildren('colorFrame')
  postingPeriod: QueryList<ElementRef> | undefined;

  public videoData: IItem[] = [];

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.getVideoData();
  }

  private async getVideoData(): Promise<void> {
    this.videoData = await DataService.getVideoData();
  }
}
