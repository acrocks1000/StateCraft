import { Request, Response } from 'express';
import { CART, ProductDetails, PRODUCTS } from './db-data';


export function getCart(req: Request, res: Response) {
    if (CART.length > 0) {
        setTimeout(() => {
            res.status(200).json({products: CART, error: ''});
        }, 2000)
    } else {
        setTimeout(() => {
            res.status(200).json({products: [], error: 'No products added to cart!'});
        }, 0);
    }
}

export function addToCart(req: Request, res: Response) {
    const productId: number = req.body.productId;
    const product: ProductDetails | undefined = PRODUCTS.find(item => item.id === productId);

    if (!product) {
        setTimeout(() => {
            res.status(404).json({ error: `Product not found! d`,});
        }, 0);
    }else if (CART.some((item: ProductDetails) => item.id === productId)) {
        let cartProduct = CART.find(
          (item: ProductDetails) => item.id === productId
        );
        if (cartProduct) {
            cartProduct.quantity++;
        }
        setTimeout(() => {
            res
                .status(200)
                .json({ state: `Quantity for product with id: ${productId} udpated to ${cartProduct?.quantity}`, newCart: CART });
        }, 0);
    } else if (product) {
        CART.push({ ...product, quantity: 1 });
        setTimeout(() => {
            res.status(200).json(CART);
        }, 2000);
    }
}

export function removeFromCart(req: Request, res: Response) {
  const id = parseInt(req.params['id']);
  const index = CART.findIndex((item: ProductDetails) => item.id === id);
  if (index !== -1) {
    CART.splice(index, 1);
    setTimeout(() => {
      res
        .status(200)
        .json({ message: `Product with id: ${id} removed successfully` });
    }, 2000);
  } else {
    setTimeout(() => {
      res.status(404).json({ error: `Product with id: ${id} not found` });
    }, 0);
  }
}
