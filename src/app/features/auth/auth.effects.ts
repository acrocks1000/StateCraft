import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './action-types';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private login$;
  logout$;

  constructor(private actions$: Actions, private router: Router) {
    this.login$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(AuthActions.login),
          tap((action) => {
            localStorage.setItem('User', JSON.stringify(action.user));
            this.router.navigate(['/store']);
          })
        ),
      { dispatch: false }
    );

    this.logout$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(AuthActions.logout),
          tap(() => {
            localStorage.removeItem('User');
            this.router.navigateByUrl('/login');
          })
        ),
      { dispatch: false }
    );
  }
}
