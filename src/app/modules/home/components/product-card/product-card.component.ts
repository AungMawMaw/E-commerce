import { Component, Input, input, Signal } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { RoundedfullComponent } from '../../../../shared/components/roundedfull/roundedfull.component';
import { RatingBarComponent } from '../rating-bar/rating-bar.component';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { Product } from '../../models/products.model';
import { WishlistService } from '../../../wishlist/services/wishlist.service';

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
  product = input.required<Product>();

  constructor(private wishlistService: WishlistService) {}

  get image() {
    return this.product().image;
  }

  imageFileLocation = 'assets/images/products/';
  get imageSrc() {
    return this.imageFileLocation + this.image;
  }

  get showDiscount() {
    return '-' + this.product().discount + '%';
  }
  onAddToWishlist(): void {
    this.isInWishlist()
      ? this.wishlistService.removeFromWishlist(this.product().id)
      : this.wishlistService.addToWishlist(this.product());
  }
  isInWishlist(): boolean {
    return this.wishlistService.isInWishlist(this.product().id);
  }
}
