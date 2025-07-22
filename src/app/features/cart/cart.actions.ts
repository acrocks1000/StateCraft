import { createAction, props } from "@ngrx/store";
import { ICartProducts } from "app/shared/models/products.model";

export const updateCartItemQuantity = createAction(
    '[Cart Page] Update product quantity',
    props<{productId: number, quantity: number}>()
)

export const loadCart = createAction(
    '[Cart Resolver] Load Cart Data'
)

export const AllCartLoaded = createAction(
    '[Load Cart Effect] All Cart Loaded',
    props<{products: ICartProducts[]}>()
)