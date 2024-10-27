import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { SemicolComponent } from '../semicol/semicol.component';

@Component({
  selector: 'app-discount-time-left',
  standalone: true,
  imports: [CommonModule, SemicolComponent],
  templateUrl: './discount-time-left.component.html',
  styleUrl: './discount-time-left.component.css',
})
export class DiscountTimeLeftComponent {
  // @Input({ required: true }) endTime!: number; // The end time in milliseconds (timestamp)
  endTime: number = Date.now() + 5 * 24 * 60 * 60 * 1000;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private subscription!: Subscription;

  ngOnInit(): void {
    this.startCountdown();
  }

  private startCountdown(): void {
    this.subscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }

  private updateCountdown(): void {
    const now = Date.now();
    const distance = this.endTime - now;

    if (distance < 0) {
      this.subscription.unsubscribe(); // Stop the countdown when the time is up
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Clean up the subscription on destroy
  }
}
