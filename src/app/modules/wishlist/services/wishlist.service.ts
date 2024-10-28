import { Injectable } from '@angular/core';
import { Product } from '../../home/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlist: Product[] = [];

  addToWishlist(product: Product): void {
    if (!this.wishlist.find((item) => item.id === product.id)) {
      this.wishlist.push(product);
    }
  }

  removeFromWishlist(productId: string): void {
    this.wishlist = this.wishlist.filter((product) => product.id !== productId);
  }

  getWishlist(): Product[] {
    return this.wishlist;
  }

  isInWishlist(productId: string): boolean {
    return this.wishlist.some((product) => product.id === productId);
  }
}
