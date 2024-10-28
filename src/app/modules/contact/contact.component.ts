import { Component } from '@angular/core';
import { FormInputComponent } from '../../shared/components/form-input/form-input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormTextAreaComponent } from '../../shared/components/form-text-area/form-text-area.component';
import { ContainerComponent } from '../../shared/components/container/container.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormInputComponent,
    ReactiveFormsModule,
    FormTextAreaComponent,
    ContainerComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private router: Router) {}

  contactForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    phone: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),
    message: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  name = this.contactForm.get('name') as FormControl;
  email = this.contactForm.get('email') as FormControl;
  phone = this.contactForm.get('phone') as FormControl;
  message = this.contactForm.get('message') as FormControl;

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactForm.reset();
      // this.router.navigate(['accounts']);
    }
  }
}
