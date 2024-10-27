import { Component, Input, input, Signal } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { RoundedfullComponent } from '../../../../shared/components/roundedfull/roundedfull.component';
import { RatingBarComponent } from '../rating-bar/rating-bar.component';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CardComponent,
    RoundedfullComponent,
    RatingBarComponent,
    CommonModule,
    CurrencyPipe,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  image = input.required<string>();
  discount = input<number | undefined>();
  // @Input() discount!: Signal<number>;
  new = input<true>();

  imageFileLocation = 'assets/images/products/';
  get imageSrc() {
    return this.imageFileLocation + this.image();
  }

  get showDiscount() {
    return '-' + this.discount() + '%';
  }
}
