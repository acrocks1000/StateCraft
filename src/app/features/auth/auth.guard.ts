import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { isLoggedIn } from './auth.selectors';
import { State } from '../../reducer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<State>, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedIn),
      tap(isLoggedIn => {
        if(!isLoggedIn) {
          this.router.navigate(['/login'])
        }
      })
    )
  }
}