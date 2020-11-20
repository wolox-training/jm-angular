import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { IBook } from 'src/app/models/book.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Array<IBook>;
  searchTitle: string = '';

  constructor(private booksService: BooksService, private router: Router) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((response) => {
      this.books = response;
    });
  }

  trackBook(book: IBook): number | undefined {
    return book ? book.id : undefined;
  }
}
