import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { IBook, IBookShoppingCart } from 'src/app/models/book.interface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as BooksActions from '../../../../store/books.actions';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Array<IBook>;
  searchTitle = '';

  constructor(
    private booksService: BooksService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((response) => {
      this.books = response;
    });
  }

  addToCart(title: string, author: string, id: number): void {
    const newCartBook: IBookShoppingCart = {
      author,
      id,
      title,
    };
    this.store.dispatch(new BooksActions.AddBook(newCartBook));
  }

  onKey(text: string): void {
    this.searchTitle = text;
  }

  openDetail(id: number): void {
    this.router.navigate(['books/' + id]);
  }

  trackBook(book: IBook): number | undefined {
    return book ? book.id : undefined;
  }
}
