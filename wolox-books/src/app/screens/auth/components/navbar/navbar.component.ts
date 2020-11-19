import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: Observable<boolean>;
  cartItems: number;

  constructor(
    public userService: UserService,
    private store: Store<AppState>,
    private shoppingCart: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn;
    this.store.select('books').subscribe((items) => {
      this.cartItems = items?.length;
    });
  }

  openModal(): void {
    this.shoppingCart.openModal(true);
  }
}
