import { Component, input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { RoundedfullComponent } from '../../../../shared/components/roundedfull/roundedfull.component';
import { RatingBarComponent } from '../rating-bar/rating-bar.component';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-today-flash-sale-item',
  standalone: true,
  imports: [
    ProductCardComponent,
    AsyncPipe,
    CardComponent,
    RoundedfullComponent,
    RatingBarComponent,
    CommonModule,
    CurrencyPipe,
  ],
  templateUrl: './today-flash-sale-item.component.html',
  styleUrl: './today-flash-sale-item.component.css',
})
export class TodayFlashSaleItemComponent {
  product = input.required<Product>();

  imageFileLocation = 'assets/images/products/';
  imageSrc(image: string) {
    return this.imageFileLocation + image;
  }

  discountedPrice(price: number, discounts: number) {
    return (price * (100 - discounts)) / 100;
    // Use DecimalPipe to format the price as a whole number
    // return this.decimalPipe.transform(discountedPrice, '1.0-0');
  }
  showDiscount(dis: number) {
    return '-' + dis + '%';
  }
}
