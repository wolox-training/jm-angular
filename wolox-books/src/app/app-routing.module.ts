import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnAuthGuard } from './guards/unauth.guard';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './screens/auth/auth.component';
import { UnAuthComponent } from './screens/unauth/unauth.component';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [AuthGuard],
    component: AuthComponent,
    loadChildren: () => import('./screens/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'unauth',
    canActivate: [UnAuthGuard],
    component: UnAuthComponent,
    loadChildren: () => import('./screens/unauth/unauth.module').then((m) => m.UnAuthModule),
  },
  { path: '', redirectTo: 'unauth', pathMatch: 'full' },
  { path: '**', redirectTo: 'unauth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
