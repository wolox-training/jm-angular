import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IBookShoppingCart } from 'src/app/models/book.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import * as BooksActions from '../../../../store/books.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  cartBooks: IBookShoppingCart[];
  cartBookSubscription: Subscription;
  constructor(private store: Store<AppState>, private shoppingCart: ShoppingCartService) {}

  ngOnInit(): void {
    this.cartBookSubscription = this.store
      .select('books')
      .subscribe((books) => (this.cartBooks = books));
  }

  ngOnDestroy(): void {
    this.cartBookSubscription.unsubscribe();
  }

  closeModal(): void {
    this.shoppingCart.openModal(false);
  }

  deleteBook(bookId: number): void {
    this.store.dispatch(new BooksActions.RemoveBook(bookId));
  }
}
