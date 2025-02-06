import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../../components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  onLogin(email: string) {
    this.authService
      .login(email)
      .pipe(
        concatMap((successful) => {
          if (!successful) {
            this.dialog.open(UserDialogComponent, {
              data: { message: 'User not found. Registering new user...' },
            });
            return this.authService.createUser(email);
          } else {
            return [] as any;
          }
        })
      )
      .subscribe({
        next: () => {
          this.dialog.open(UserDialogComponent, {
            data: { message: 'User created successfully!' },
          });
          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          console.error('Error during login or user creation: ', err);
          this.dialog.open(UserDialogComponent, {
            data: { message: 'Oops! Something went wrong.' },
          });
        },
      });
  }
}
