import { Component } from '@angular/core';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { Product } from '../home/models/products.model';
import { WishlistService } from './services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  wishlist: Product[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.wishlist = this.wishlistService.getWishlist();
  }

  removeFromWishlist(productId: string): void {
    this.wishlistService.removeFromWishlist(productId);
    this.wishlist = this.wishlistService.getWishlist();
  }
}
