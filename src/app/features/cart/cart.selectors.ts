import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from 'app/features/cart/cart.reducer';

export const selectCartState =
  createFeatureSelector<fromCart.cartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  fromCart.selectAll
);

export const selectCartTotalPrice = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)
);

export const selectCartTotalQuantity = createSelector(
  selectCartItems,
  (items) => items.reduce((count, item) => count + item.quantity, 0)
);

export const isCartLoaded = createSelector(
    selectCartState,
    state => state.isCartLoaded
)