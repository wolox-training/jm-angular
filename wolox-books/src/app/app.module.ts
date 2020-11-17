import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnAuthModule } from './screens/unauth/unauth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AuthModule } from './screens/auth/auth.module';
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/unauth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { BooksService } from './services/books.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UnAuthModule, AuthModule, HttpClientModule, AppRoutingModule],
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
