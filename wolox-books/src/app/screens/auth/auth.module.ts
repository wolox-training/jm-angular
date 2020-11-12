import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { LoginComponent } from './screens/login/login.component';

@NgModule({
  declarations: [AuthComponent, SignUpComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
