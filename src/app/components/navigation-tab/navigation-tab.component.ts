import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { State } from '../../reducer';
import { select, Store } from '@ngrx/store';
import { isLoggedIn, isLoggedOut } from '../../features/auth/auth.selectors';
import { CommonModule } from '@angular/common';
import { logout } from '../../features/auth/auth.actions';

@Component({
  selector: 'app-navigation-tab',
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation-tab.component.html',
  styleUrl: './navigation-tab.component.scss',
})
export class NavigationTabComponent implements OnInit {
  
  isLoggedIn$!: Observable<boolean>;
  isLoggedOut$!: Observable<boolean>;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
      this.isLoggedIn$ = this.store.pipe(
        select(isLoggedIn)
      )
      this.isLoggedOut$ = this.store.pipe(
        select(isLoggedOut),
        tap(isLoggedOut => {
          if(isLoggedOut) {
            this.router.navigate(['/login']);
          }
        })
      )
  }

  logout() {
    this.store.dispatch(logout());
  }
}