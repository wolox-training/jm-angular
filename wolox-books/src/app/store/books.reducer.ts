import { Action } from '@ngrx/store';
import { IBookShoppingCart, IBook } from './../models/book.interface';
import * as BooksActions from './books.actions';

export const booksReducer = (state: IBookShoppingCart[] = [], action: BooksActions.Actions) => {
  switch (action.type) {
    case BooksActions.ADD_BOOK:
      return [...state, action.payload];

    case BooksActions.REMOVE_BOOK:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};
