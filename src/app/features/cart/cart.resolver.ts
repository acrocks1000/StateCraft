import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { State } from 'app/reducer';
import { loadCart } from './cart.actions';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { isCartLoaded } from './cart.selectors';

@Injectable()
export class CartResolver implements Resolve<any> {
  loading: boolean = false;
  private store = inject(Store<State>);
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(isCartLoaded),
      tap((isCartLoaded) => {
        console.log("enter load cart tap")
        if (!this.loading && !isCartLoaded) {
          this.loading = true;
          console.log("send loadCart")
          this.store.dispatch(loadCart());
        }
      }),
      filter(cartLoaded => cartLoaded),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
