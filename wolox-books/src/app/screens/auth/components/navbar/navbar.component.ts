import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLoggedIn: Observable<boolean>;
  cartItems: number;
  cartItemsSubscription: Subscription;

  constructor(public userService: UserService, private shoppingCart: ShoppingCartService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn;
    this.cartItemsSubscription = this.shoppingCart.cartItems.subscribe(
      (items) => (this.cartItems = items)
    );
  }

  ngOnDestroy(): void {
    this.cartItemsSubscription.unsubscribe();
  }
}
