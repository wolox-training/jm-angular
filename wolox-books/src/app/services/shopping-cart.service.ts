import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBook } from '../models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cartItemsSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public currentCartItems = this.cartItemsSource.asObservable();

  constructor() {}

  addCartItem(book: IBook): void {
    const cartItems: number = this.cartItemsSource.getValue() + 1;
    this.cartItemsSource.next(cartItems);
  }
}
