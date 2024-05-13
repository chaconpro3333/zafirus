export interface IntHero {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: IntThumbnail;
  resourceURI: string;
  comics: IntComics;
  series: IntComics;
  stories: IntStories;
  events: IntComics;
  urls: IntUrl[];
}

interface IntUrl {
  type: string;
  url: string;
}

interface IntStories {
  available: number;
  collectionURI: string;
  items: IntItem2[];
  returned: number;
}

interface IntItem2 {
  resourceURI: string;
  name: string;
  type: string;
}

interface IntComics {
  available: number;
  collectionURI: string;
  items: IntItem[];
  returned: number;
}

interface IntItem {
  resourceURI: string;
  name: string;
}

interface IntThumbnail {
  path: string;
  extension: string;
}
