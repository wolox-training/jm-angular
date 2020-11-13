import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './screens/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthModule, HttpClientModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
