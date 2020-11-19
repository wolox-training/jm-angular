import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private modalSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public modalState = this.modalSource.asObservable();

  constructor() {}

  openModal(state: boolean): void {
    this.modalSource.next(state);
  }
}
