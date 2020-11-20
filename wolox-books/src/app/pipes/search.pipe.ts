import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../models/book.interface';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
  transform(books: IBook[], searchTitle: string): IBook[] {
    if (!books) {
      return [];
    }
    if (!searchTitle) {
      return books;
    }
    searchTitle = searchTitle.toLocaleLowerCase();
    return books.filter((book: IBook) => {
      return book.title.toLocaleLowerCase().includes(searchTitle);
    });
  }
}
