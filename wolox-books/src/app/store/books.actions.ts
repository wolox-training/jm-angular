import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { IBookShoppingCart } from './../models/book.interface';

export const ADD_BOOK = '[Book] Add';

export const REMOVE_BOOK = '[Book] Remove';

export class AddBook implements Action {
  readonly type = ADD_BOOK;

  constructor(public payload: IBookShoppingCart) {}
}

export class RemoveBook implements Action {
  readonly type = REMOVE_BOOK;

  constructor(public payload: number) {}
}

export type Actions = AddBook | RemoveBook;
