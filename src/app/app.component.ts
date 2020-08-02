import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilityFunctions } from './app.utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private util: UtilityFunctions
  ) { }

  loginForm = new FormGroup({
    name: new FormControl('', [
          this.util.requiredValidator('Name'),
          this.util.minlengthValidator('Name', 3),
          this.util.maxlengthValidator('Name', 25),
        ]),
    email: new FormControl('', [
          this.util.requiredValidator('Email ID'),
          this.util.emailValidator,
          this.util.minlengthValidator('Email ID', 8),
          this.util.maxlengthValidator('Email ID', 45),
        ]),
    password: new FormControl('', [
          this.util.requiredValidator('Password'),
          this.util.minlengthValidator('Password', 8),
          this.util.maxlengthValidator('Password', 16),
        ]),
  });

  login() {
    this.loginForm.markAllAsTouched();
  }

}
