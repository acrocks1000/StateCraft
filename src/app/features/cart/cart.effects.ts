import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CartActions } from './action-types';
import { concatMap, map } from 'rxjs';
import { SharedService } from 'app/shared/shared.service';
import { AllCartLoaded } from './cart.actions';
import { ICartProducts } from 'app/shared/models/products.model';

@Injectable()
export class CartEffects {
  loadCart$;
  constructor(private actions$: Actions, private sharedService: SharedService) {
    this.loadCart$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CartActions.loadCart),
        concatMap((action) => this.sharedService.getCart()),
        map((response: any) => AllCartLoaded({ products: response.products }))
      )
    );
  }
}
