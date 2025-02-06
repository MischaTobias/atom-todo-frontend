import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [LoginFormComponent, LoginPageComponent, UserDialogComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, MatDialogModule],
})
export class AuthModule {}
