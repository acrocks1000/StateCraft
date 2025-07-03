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
import * as fromAuth from './features/auth/auth.reducer';
import { provideHttpClient } from '@angular/common/http';
import { AuthGuard } from './features/auth/auth.guard';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './features/auth/auth.effects';

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
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(),
    provideEffects(AuthEffects),
  ],
};
