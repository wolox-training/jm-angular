import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { IBookDetail } from 'src/app/models/book.interface';
import { BEST_SELLERS, DETAIL } from './book-detail-constants';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  detail: IBookDetail = DETAIL;
  bestSellers: string[] = BEST_SELLERS;

  constructor(private route: ActivatedRoute, private bookService: BooksService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.bookService.getDetail(id).subscribe((response) => {
      this.detail = response;
    });
  }

  isBestSeller(author: string): boolean {
    return this.bestSellers.includes(author);
  }
}
