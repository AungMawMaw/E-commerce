import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormInputComponent } from '../../../../shared/components/form-input/form-input.component';
import { User } from '../../models/user.model';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormInputComponent,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private router: Router) {}

  authForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  name = this.authForm.get('name') as FormControl;
  email = this.authForm.get('email') as FormControl;
  password = this.authForm.get('password') as FormControl;

  onSubmit() {
    if (this.authForm.valid) {
      const data: User = {
        name: this.name.value,
        email: this.email.value,
        password: this.password.value,
      };
      this.authForm.reset();
      this.router.navigate(['accounts']);
    }
  }
}
