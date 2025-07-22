import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ICartProducts } from 'app/shared/models/products.model';
import { CartActions } from './action-types';

export const featureKey = 'cart';

export interface cartState extends EntityState<ICartProducts> {
    isCartLoaded: boolean
}

export const adapter = createEntityAdapter<ICartProducts>();

export const initialCartState = adapter.getInitialState({
  isCartLoaded: false,
});

export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.AllCartLoaded, (state, action) =>
    adapter.setAll(action.products, { ...state, isCartLoaded: true })
  )
);

export const { selectAll } = adapter.getSelectors();
