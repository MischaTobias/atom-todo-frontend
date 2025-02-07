import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  email: string = '';

  @Output() onLogin = new EventEmitter<string>();

  async submit(form: NgForm) {
    if (form.valid) {
      this.onLogin.emit(this.email);
    }
  }
}
