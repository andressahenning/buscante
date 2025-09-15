export interface Livro {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  previewLink?: string;
  thumbnail?: string;
}

export interface VolumeInfo {
  title:        string;
  authors:      string[];
  publisher?:   string;
  publishedDate?: string;
  description?: string;
  previewLink?: string;
  imageLinks?: ImageLinks;
}

export interface Item {
  kind:       string;
  id:         string;
  etag:       string;
  selfLink:   string;
  volumeInfo: VolumeInfo;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

export interface LivrosResultado {
  items: Item[];
  totalItems: number
}