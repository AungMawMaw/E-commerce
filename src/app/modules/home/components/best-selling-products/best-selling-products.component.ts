import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Product } from '../../models/products.model';
import { ProductService } from '../../services/product.service';
import { CategoryHeaderComponent } from '../category-header/category-header.component';
import { BestSellingProductsItemComponent } from '../best-selling-products-item/best-selling-products-item.component';

@Component({
  selector: 'app-best-selling-products',
  standalone: true,
  imports: [
    AsyncPipe,
    CategoryHeaderComponent,
    BestSellingProductsItemComponent,
  ],
  templateUrl: './best-selling-products.component.html',
  styleUrl: './best-selling-products.component.css',
})
export class BestSellingProductsComponent {
  public products$: Observable<Product[]> = EMPTY;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.products$;
  }
}
