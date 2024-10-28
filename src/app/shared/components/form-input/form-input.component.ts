import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css',
})
export class FormInputComponent {
  @Input() control!: FormControl;
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() initialValue: string | null = null; // Optional initial value

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialValue'] && this.initialValue !== null) {
      this.control.setValue(this.initialValue);
    }
  }
}
