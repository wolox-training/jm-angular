import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnAuthRoutingModule } from './unauth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UnAuthComponent } from './unauth.component';
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { LoginComponent } from './screens/login/login.component';

@NgModule({
  declarations: [UnAuthComponent, SignUpComponent, LoginComponent],
  imports: [CommonModule, UnAuthRoutingModule, ReactiveFormsModule],
})
export class UnAuthModule {}
