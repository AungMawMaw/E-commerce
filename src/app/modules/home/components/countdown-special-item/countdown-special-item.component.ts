import { Component } from '@angular/core';
import { CountdownSpecialItemTimerComponent } from '../countdown-special-item-timer/countdown-special-item-timer.component';

@Component({
  selector: 'app-countdown-special-item',
  standalone: true,
  imports: [CountdownSpecialItemTimerComponent],
  templateUrl: './countdown-special-item.component.html',
  styleUrl: './countdown-special-item.component.css',
})
export class CountdownSpecialItemComponent {}
