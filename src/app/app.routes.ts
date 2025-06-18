import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';

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
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
