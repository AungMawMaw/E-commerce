import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { EMPTY, Observable } from 'rxjs';
import { Product } from '../../models/products.model';
import { ProductService } from '../../services/product.service';
import { AsyncPipe } from '@angular/common';
import { TodayFlashSaleItemComponent } from '../today-flash-sale-item/today-flash-sale-item.component';
import { CategoryHeaderComponent } from '../category-header/category-header.component';

@Component({
  selector: 'app-today-flash-sale',
  standalone: true,
  imports: [TodayFlashSaleItemComponent, AsyncPipe, CategoryHeaderComponent],
  templateUrl: './today-flash-sale.component.html',
  styleUrl: './today-flash-sale.component.css',
})
export class TodayFlashSaleComponent {
  public products$: Observable<Product[]> = EMPTY;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.products$;
  }
}
