import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit, OnDestroy {
  openModal: boolean;
  modalStateSubscription: Subscription;

  constructor(private shoppingCart: ShoppingCartService) {}

  ngOnInit(): void {
    this.modalStateSubscription = this.shoppingCart.modalState.subscribe((state) => {
      this.openModal = state;
    });
  }

  ngOnDestroy(): void {
    this.modalStateSubscription.unsubscribe();
  }
}
