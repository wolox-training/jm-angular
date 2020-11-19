import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  openModal: boolean;
  constructor(private shoppingCart: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCart.modalState.subscribe((state) => {
      this.openModal = state;
    });
  }
}
