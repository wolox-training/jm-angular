import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBookShoppingCart } from 'src/app/models/book.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import * as BooksActions from '../../../../store/books.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  cartBooks: Observable<IBookShoppingCart[]>;
  constructor(private store: Store<AppState>, private shoppingCart: ShoppingCartService) {}

  ngOnInit(): void {
    this.cartBooks = this.store.select('books');
  }

  closeModal(): void {
    this.shoppingCart.openModal(false);
  }

  delBook(bookId: number): void {
    this.store.dispatch(new BooksActions.RemoveBook(bookId));
  }
}
