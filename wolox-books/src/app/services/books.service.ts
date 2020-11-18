import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IBook, IBookDetail } from '../models/book.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readonly API_URI: string = `${environment.apiUri}`;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get(this.API_URI + '/books').pipe(
      map((response: any) => {
        const books: IBook[] = response.page;
        return books;
      })
    );
  }

  getDetail(id: number): Observable<IBookDetail> {
    return this.http.get<IBookDetail>(this.API_URI + '/books/' + id);
  }
}
