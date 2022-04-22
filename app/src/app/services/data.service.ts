import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IItem, RootObject } from '../interfaces/search-item.model';
import {
  YOUTUBE_SEARCH_URL,
  YOUTUBE_VIDEO_URL,
  MAX_VIDEOS,
} from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export default class DataService {
  public inputValue: string = '';

  public filterValue: string = '';

  public colorValue: string = '';

  public isVisible: boolean = false;

  public isReverseSort: boolean = false;

  public videoIds: string[] = [];

  public videoData: IItem[] | undefined;

  constructor(private readonly http: HttpClient) {}

  public getVideosData(): Observable<RootObject> {
    const queryParams = [
      'part=snippet,statistics',
      `id=${this.videoIds.join()}`,
    ];
    const videoDataUrl = `${YOUTUBE_VIDEO_URL}?${queryParams.join('&')}`;

    return this.http.get<RootObject>(videoDataUrl);
  }

  public getYoutubeApi(searchValue: string): Observable<RootObject> {
    const queryParams = [
      'part=snippet',
      `maxResults=${MAX_VIDEOS}`,
      `q=${searchValue}`,
      'type=video',
    ];
    const videoDataUrl = `${YOUTUBE_SEARCH_URL}?${queryParams.join('&')}`;

    return this.http.get<RootObject>(videoDataUrl);
  }
}
