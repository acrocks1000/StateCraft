import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { ProductActions } from './action-types';
import { SharedService } from 'app/shared/shared.service';
import { allProductsLoaded } from './products.actions';
import { loadCart } from '../cart/cart.actions';

@Injectable()
export class ProductEffects {
  loadProduct$;
  addToCart$;
  constructor(private actions$: Actions, private sharedService: SharedService) {
    this.loadProduct$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProductActions.loadProducts),
        concatMap(() => this.sharedService.getProducts()),
        map((products) => allProductsLoaded({ products: products }))
      )
    );

    this.addToCart$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProductActions.addToCart),
        concatMap((action) => this.sharedService.addToCart(action.product.id)),
        map((action) => loadCart())
      ),
    );
  }
}
