import { IBookShoppingCart } from './models/book.interface';

export interface AppState {
  readonly books: IBookShoppingCart[];
}
