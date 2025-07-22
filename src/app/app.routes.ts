import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { AuthGuard } from './features/auth/auth.guard';
import { ProductsResolver } from './features/products/products.resolver';
import { CartResolver } from './features/cart/cart.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full',
  },
  {
    path: 'store',
    loadComponent: () =>
      import('./store/store.component').then((m) => m.StoreComponent),
    canActivate: [AuthGuard],
    resolve: {
      products: ProductsResolver
    },
    providers: [ProductsResolver]
  },
  {
    path: 'cart',
    loadComponent: () => import ('app/features/cart/cart.component').then((m) => m.CartComponent),
    canActivate: [AuthGuard],
    resolve: {
      products: CartResolver
    },
    providers: [CartResolver]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
