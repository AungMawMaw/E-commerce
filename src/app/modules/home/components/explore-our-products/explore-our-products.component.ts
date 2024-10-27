import { Component } from '@angular/core';
import { CategoryHeaderComponent } from '../category-header/category-header.component';
import { NextAndPreviousComponent } from '../next-and-previous/next-and-previous.component';
import { ExploreOurProductsItemComponent } from '../explore-our-products-item/explore-our-products-item.component';
import { EMPTY, Observable } from 'rxjs';
import { Product } from '../../models/products.model';
import { ProductService } from '../../services/product.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-explore-our-products',
  standalone: true,
  imports: [
    CategoryHeaderComponent,
    NextAndPreviousComponent,
    ExploreOurProductsItemComponent,
    AsyncPipe,
  ],
  templateUrl: './explore-our-products.component.html',
  styleUrl: './explore-our-products.component.css',
})
export class ExploreOurProductsComponent {
  public products$: Observable<Product[]> = EMPTY;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.products$;
  }
}
