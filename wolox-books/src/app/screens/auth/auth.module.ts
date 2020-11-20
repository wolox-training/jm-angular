import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BookListComponent } from './screens/book-list/book-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AuthComponent, BookListComponent, NavbarComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
