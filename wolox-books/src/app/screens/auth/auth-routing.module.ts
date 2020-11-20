import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { BookListComponent } from './screens/book-list/book-list.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AuthComponent,
    children: [
      {
        path: 'books/:id',
        component: BookDetailComponent,
      },
      {
        path: 'books',
        component: BookListComponent,
      },
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
