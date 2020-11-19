import { IBookShoppingCart, IBook } from './models/book.interface';

export interface AppState {
  readonly books: IBookShoppingCart[];
}
