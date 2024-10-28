import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() color: string = 'bg-primary-red';
  @Input() textColor: string = 'text-secondary';
  @Input() size: string = 'py-2 px-6';
  @Input() rounded: string = '';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
