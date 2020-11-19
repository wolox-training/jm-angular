import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { IBook } from 'src/app/models/book.interface';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

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
    private shoppingCart: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((response) => {
      this.books = response;
    });
  }

  addToCart(book: IBook): void {
    this.shoppingCart.addCartItem(book);
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
