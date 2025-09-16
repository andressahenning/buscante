import { ImageLinks } from "./interfaces";

export class LivroVolumeInfo {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  previewLink?: string;
  thumbnail?: ImageLinks;

  constructor (item) {
    const info = item.volumeInfo;

    this.title = info.title,
    this.authors = info.authors,
    this.publisher = info.publisher,
    this.publishedDate = info.publishedDate,
    this.description = info.description,
    this.previewLink = info.previewLink,
    this.thumbnail = info.imageLinks?.thumbnail
  }
}