export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface IThumbnailsProperties {
  url: string;
  width: number;
  height: number;
}

export interface IThumbnails {
  default: IThumbnailsProperties;
  medium: IThumbnailsProperties;
  high: IThumbnailsProperties;
  standard: IThumbnailsProperties;
  maxres: IThumbnailsProperties;
}

export interface ILocalized {
  title: string;
  description: string;
}

export interface ISnippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
  defaultLanguage: string;
}

export interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
