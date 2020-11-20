import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readonly API_URI: string = `${environment.apiUri}`;

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any>(this.API_URI + '/books');
  }
}
