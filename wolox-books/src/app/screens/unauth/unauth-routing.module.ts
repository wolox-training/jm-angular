import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { UnAuthComponent } from './unauth.component';
import { LoginComponent } from './screens/login/login.component';
import { UnAuthGuard } from 'src/app/guards/unauth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [UnAuthGuard],
    component: UnAuthComponent,
    children: [
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'login',
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
