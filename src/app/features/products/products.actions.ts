import { createAction, props } from "@ngrx/store";
import { IProducts } from "app/shared/models/products.model";

export const loadProducts = createAction(
    '[Product resolver] Load all Products'
)

export const allProductsLoaded = createAction(
    '[Load Product Effects] All products loaded',
    props<{products: IProducts[]}>()
)

export const addToCart = createAction(
    "[Product Page] Add to Cart",
    props<{product: IProducts}>()
)