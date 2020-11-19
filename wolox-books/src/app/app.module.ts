import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UnAuthModule } from './screens/unauth/unauth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './screens/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/unauth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { BooksService } from './services/books.service';

import { booksReducer } from './store/books.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      books: booksReducer,
    }),
    UnAuthModule,
    AuthModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    UserService,
    BooksService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    AuthGuard,
    UnAuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
