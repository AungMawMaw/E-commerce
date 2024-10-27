import { Component, OnInit, signal } from '@angular/core';
import { DiscountBannerComponent } from './components/discount-banner/discount-banner.component';
import { SiderComponent } from './components/sider/sider.component';
import { TodayFlashSaleComponent } from './components/today-flash-sale/today-flash-sale.component';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { EMPTY, finalize, Observable } from 'rxjs';
import { ProductService } from './services/product.service';
import { Product } from './models/products.model';
import { BrowseByCategoryComponent } from './components/browse-by-category/browse-by-category.component';
import { BestSellingProductsComponent } from './components/best-selling-products/best-selling-products.component';
import { ExploreOurProductsComponent } from './components/explore-our-products/explore-our-products.component';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { CountdownSpecialItemComponent } from './components/countdown-special-item/countdown-special-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DiscountBannerComponent,
    SiderComponent,
    TodayFlashSaleComponent,
    ContainerComponent,
    BrowseByCategoryComponent,
    BestSellingProductsComponent,
    ExploreOurProductsComponent,
    NewArrivalComponent,
    CountdownSpecialItemComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public products$: Observable<Product[]> = EMPTY;

  isFetching = signal(true);
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService
      .loadProduct()
      .pipe(finalize(() => this.isFetching.set(false)))
      .subscribe();
    this.products$ = this.productService.products$;
  }
}
