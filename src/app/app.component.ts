import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavigationTabComponent } from './components/navigation-tab/navigation-tab.component';
import { FooterComponent } from './components/footer/footer.component';
import { Store } from '@ngrx/store';
import { State } from './reducer';
import { login } from './features/auth/auth.actions';
import { AppLoaderComponent } from "./components/app-loader/app-loader.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavigationTabComponent,
    FooterComponent,
    AppLoaderComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'StateCraft';

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    const userProfile = localStorage.getItem('User');
    if (userProfile) {
      this.store.dispatch(login({ user: JSON.parse(userProfile) }));
    }
  }
}
