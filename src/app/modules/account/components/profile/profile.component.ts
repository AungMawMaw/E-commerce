import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormInputComponent } from '../../../../shared/components/form-input/form-input.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, FormInputComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor(private router: Router) {}

  profileForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    lastName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    address: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),

    currentPassword: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),

    newPassword: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),
    confirmPassword: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  firstName = this.profileForm.get('firstName') as FormControl;

  lastName = this.profileForm.get('lastName') as FormControl;
  email = this.profileForm.get('email') as FormControl;
  address = this.profileForm.get('address') as FormControl;
  currentPassword = this.profileForm.get('currentPassword') as FormControl;
  newPassword = this.profileForm.get('newPassword') as FormControl;
  confirmPassword = this.profileForm.get('confirmPassword') as FormControl;

  onSubmit() {
    if (this.profileForm.valid) {
      this.profileForm.reset();
      // this.router.navigate(['accounts']);
    }
  }
}
