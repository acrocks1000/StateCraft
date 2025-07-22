import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromProduct from './products.reducer'

export const selectProductState = createFeatureSelector<fromProduct.productState>("products");

export const selectAllProducts = createSelector(
    selectProductState,
    fromProduct.selectAll
)

export const areProductsLoaded = createSelector(
    selectProductState,
    state => state.allProductsLoaded
);