import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { State } from "app/reducer";
import { filter, finalize, first, Observable, tap } from "rxjs";
import { loadProducts } from "./products.actions";
import { Injectable } from "@angular/core";
import { areProductsLoaded } from "./products.selectors";

@Injectable()
export class ProductsResolver implements Resolve<any> {
    loading: boolean = false;
    constructor(private store: Store<State>) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            select(areProductsLoaded),
            tap((productsLoaded) => {
                if (!this.loading && !productsLoaded) {
                    console.log('Products resolver is working');
                    this.loading = true;
                    this.store.dispatch(loadProducts());
                }
            }),
            filter(productsLoaded => productsLoaded),
            first(),
            finalize(() => this.loading = false)
        )
    }
}