import { Component, input } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CurrencyPipe } from '@angular/common';
import { RatingBarComponent } from '../rating-bar/rating-bar.component';

@Component({
  selector: 'app-best-selling-products-item',
  standalone: true,
  imports: [ProductCardComponent, CurrencyPipe, RatingBarComponent],
  templateUrl: './best-selling-products-item.component.html',
  styleUrl: './best-selling-products-item.component.css',
})
export class BestSellingProductsItemComponent {
  product = input.required<Product>();

  imageFileLocation = 'assets/images/products/';
  imageSrc(image: string) {
    return this.imageFileLocation + image;
  }

  discountedPrice(price: number, discounts: number) {
    return (price * (100 - discounts)) / 100;
  }
}
