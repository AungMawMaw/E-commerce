import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINK, NavLink, NavLinkProvider } from './models/nav.model';
import { HeaderDiscountComponent } from './components/header-discount/header-discount.component';
import { Product } from '../../modules/home/models/products.model';
import { WishlistService } from '../../modules/wishlist/services/wishlist.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, HeaderDiscountComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [NavLinkProvider],
})
export class HeaderComponent implements OnInit {
  wishlist: Product[] = [];
  constructor(
    @Inject(NAV_LINK) public links: NavLink[],
    private wishlistService: WishlistService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.wishlist = this.wishlistService.getWishlist();
  }
}
