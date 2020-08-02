import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(25), Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(45), Validators.minLength(8)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/g),
                                  Validators.maxLength(16), Validators.minLength(8)])
  });

  login() {
    this.loginForm.markAllAsTouched();
  }

}
