import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { provideState, Store } from '@ngrx/store';
import { AuthState } from '../auth.reducer';
import { login } from '../auth.actions';
import { AuthService } from '../auth.service';
import { noop, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AuthState>, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const value = this.loginForm.value;
      this.authService
        .login(value.email, value.password)
        .pipe(
          tap((user) => {
            const newLoginAction = login({ user });
            this.store.dispatch(newLoginAction);
            this.router.navigate(['/store']);
          })
        )
        .subscribe({
          next: noop,
          error: () => alert('Login failed'),
        });
    } else {
      this.loginForm.markAllAsTouched(); // show all validation messages
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
