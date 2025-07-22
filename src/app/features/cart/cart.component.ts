import { CommonModule } from '@angular/common';
import { Component, inject, WritableSignal } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/reducer';
import { selectCartItems, selectCartTotalPrice, selectCartTotalQuantity } from './cart.selectors';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  private store = inject(Store<State>);

  cartItems = this.store.selectSignal(selectCartItems);
  totalPrice = this.store.selectSignal(selectCartTotalPrice);
  totalQuantity = this.store.selectSignal(selectCartTotalQuantity);

  updateQuantity(productId: number, quantity: number) {
    if (quantity >= 1) {
      // this.store.dispatch(updateCartItemQuantity({ productId, quantity }));
    } else {
      this.removeItem(productId)
    }
  }

  removeItem(productId: number) {
    // this.store.dispatch(removeFromCart({ productId }));
  }
}
