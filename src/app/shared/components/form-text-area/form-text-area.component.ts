import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-text-area',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-text-area.component.html',
  styleUrl: './form-text-area.component.css',
})
export class FormTextAreaComponent {
  @Input() control!: FormControl;
  @Input() label: string = '';
  @Input() bg: string = '';

  @Input() rows: string = '2';

  @Input() placeholder: string = '';
  @Input() initialValue: string | null = null; // Optional initial value

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialValue'] && this.initialValue !== null) {
      this.control.setValue(this.initialValue);
    }
  }
}
