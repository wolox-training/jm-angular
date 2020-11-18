import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Subscription } from 'rxjs';
import { IBook } from 'src/app/models/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  bookSubscription: Subscription;
  books: Array<IBook>;
  searchTitle = '';

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.bookSubscription = this.booksService.getBooks().subscribe((response) => {
      this.books = response.page;
    });
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }

  onKey(text: string): void {
    console.log(this.books);
    this.searchTitle = text;
  }

  trackBook(book: IBook): number | undefined {
    return book ? book.id : undefined;
  }
}
