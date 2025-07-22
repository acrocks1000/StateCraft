import { createReducer, on } from "@ngrx/store";
import { IProducts } from "app/shared/models/products.model";
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ProductActions } from "./action-types";
import { allProductsLoaded } from "./products.actions";

export const key = 'products';

export interface productState extends EntityState<IProducts> {
    allProductsLoaded: boolean
}

export const adapter = createEntityAdapter<IProducts>();

export const initialProductsState = adapter.getInitialState({
    allProductsLoaded: false
});

export const productsReducer = createReducer(
    initialProductsState,
    on(ProductActions.allProductsLoaded, (state, action) => {
        return adapter.setAll(action.products, {...state, allProductsLoaded: true});
    })
)

export const { selectAll } = adapter.getSelectors();
