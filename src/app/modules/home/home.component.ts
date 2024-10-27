import { Component, OnInit, signal } from '@angular/core';
import { DiscountBannerComponent } from './components/discount-banner/discount-banner.component';
import { SiderComponent } from './components/sider/sider.component';
import { TodayFlashSaleComponent } from './components/today-flash-sale/today-flash-sale.component';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { EMPTY, finalize, Observable } from 'rxjs';
import { ProductService } from './services/product.service';
import { Product } from './models/products.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DiscountBannerComponent,
    SiderComponent,
    TodayFlashSaleComponent,
    ContainerComponent,
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
