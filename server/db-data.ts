export const USERS = {
  1: {
    id: 1,
    email: 'test@abc.com',
    password: 'test@1234',
  },
};

export interface ProductDetails {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
}

export interface CartProductDetails extends ProductDetails {
  quantity: number
}

export const PRODUCTS = [
  { id: 1, name: 'Storm Small Jug', price: 19.12, oldPrice: 23.9, image: 'products/pexels-jug.jpg' },
  { id: 2, name: 'Side Table', price: 29, image: 'products/pexels-chair.jpg' },
  { id: 3, name: 'Nox Portable Table Lamp', price: 29, image: 'products/pexels-lamp.jpg' },
  { id: 4, name: 'Langue Stack Chair', price: 11.9, image: 'products/pexels-sofa.jpg' },
  { id: 5, name: 'Modern Vase', price: 15, image: 'products/pexels-jug.jpg' },
  { id: 6, name: 'Classic Armchair', price: 45, image: 'products/pexels-chair.jpg' },
  { id: 7, name: 'Desk Lamp', price: 22.5, image: 'products/pexels-lamp.jpg' },
  { id: 8, name: 'Comfy Sofa', price: 99.99, image: 'products/pexels-sofa.jpg' },
  { id: 9, name: 'Minimalist Table', price: 39.99, image: 'products/pexels-chair.jpg' },
  { id: 10, name: 'Decorative Jug', price: 18.75, image: 'products/pexels-jug.jpg' },
];

export const CART: CartProductDetails[]= [];

export function authenticate(email: string, password: string) {
  const user: any = Object.values(USERS).find((user) => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }
}
