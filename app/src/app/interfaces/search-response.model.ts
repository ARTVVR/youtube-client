import { ISnippet, IStatistics, IPageInfo } from './search-item.model';

export interface IItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

export interface RootObject {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: IItem[];
}
