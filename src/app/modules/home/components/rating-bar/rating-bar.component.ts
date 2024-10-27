import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-bar.component.html',
  styleUrl: './rating-bar.component.css',
})
export class RatingBarComponent {
  @Input() rating: number = 0;
  stars: number[] = Array(5).fill(0);

  // get fullStars() {
  //   return Math.floor(this.rating);
  // }
  //
  // get hasHalfStar() {
  //   return this.rating % 1 >= 0.5;
  // }
  //
  // get emptyStars() {
  //   return 5 - this.fullStars - (this.hasHalfStar ? 1 : 0);
  // }
}
