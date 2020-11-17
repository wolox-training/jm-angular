import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { UnAuthComponent } from './unauth.component';
import { LoginComponent } from './screens/login/login.component';
import { UnAuthGuard } from 'src/app/guards/unauth.guard';

const routes: Routes = [
  {
    path: '',
    component: UnAuthComponent,
    children: [
      {
        path: 'sign-up',
        canActivate: [UnAuthGuard],
        component: SignUpComponent,
      },
      {
        path: 'login',
        canActivate: [UnAuthGuard],
        component: LoginComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnAuthRoutingModule {}
