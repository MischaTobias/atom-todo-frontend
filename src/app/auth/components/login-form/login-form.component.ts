import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  email: string = '';

  @Output() login = new EventEmitter<string>();

  async submit() {
    this.login.emit(this.email);
  }
}
