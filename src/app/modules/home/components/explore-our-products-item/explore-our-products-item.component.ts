import { Component, input } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CurrencyPipe } from '@angular/common';
import { RatingBarComponent } from '../rating-bar/rating-bar.component';

@Component({
  selector: 'app-explore-our-products-item',
  standalone: true,
  imports: [ProductCardComponent, CurrencyPipe, RatingBarComponent],
  templateUrl: './explore-our-products-item.component.html',
  styleUrl: './explore-our-products-item.component.css',
})
export class ExploreOurProductsItemComponent {
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
}
