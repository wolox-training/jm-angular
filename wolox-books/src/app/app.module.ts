import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnAuthModule } from './screens/unauth/unauth.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AuthModule } from './screens/auth/auth.module';
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/unauth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UnAuthModule, AuthModule, HttpClientModule, AppRoutingModule],
  providers: [UserService, AuthGuard, UnAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
