import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BookListComponent } from './screens/book-list/book-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchPipe } from 'src/app/pipes/search.pipe';

@NgModule({
  declarations: [AuthComponent, BookListComponent, NavbarComponent, SearchPipe],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
