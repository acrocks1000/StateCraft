import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducer';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './features/auth/auth.effects';
import { provideRouterStore, RouterState } from '@ngrx/router-store';
import { ProductEffects } from './features/products/products.effects';

import * as fromAuth from './features/auth/auth.reducer';
import * as fromProducts from 'app/features/products/products.reducer';
import * as fromCart from 'app/features/cart/cart.reducer';
import { CartEffects } from './features/cart/cart.effects';
import { LoadingInterceptor } from './shared/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
      },
    }),
    provideState({
      name: fromAuth.authFeatureKey,
      reducer: fromAuth.authReducer,
    }),
    provideState({
      name: fromProducts.key,
      reducer: fromProducts.productsReducer,
    }),
    provideState({
      name: fromCart.featureKey,
      reducer: fromCart.cartReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(AuthEffects, ProductEffects, CartEffects),
    provideRouterStore({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
};
