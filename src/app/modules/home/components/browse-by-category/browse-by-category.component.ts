import { Component, Inject } from '@angular/core';
import {
  CATEGORY_LINK,
  CategoryLink,
  CategoryLinkProvider,
} from '../../models/products.model';
import { CategoryHeaderComponent } from '../category-header/category-header.component';
import { NextAndPreviousComponent } from '../next-and-previous/next-and-previous.component';
import { BrowseByCategoryItemComponent } from '../browse-by-category-item/browse-by-category-item.component';

@Component({
  selector: 'app-browse-by-category',
  standalone: true,
  imports: [
    CategoryHeaderComponent,
    NextAndPreviousComponent,
    BrowseByCategoryItemComponent,
  ],
  templateUrl: './browse-by-category.component.html',
  styleUrl: './browse-by-category.component.css',
  providers: [CategoryLinkProvider],
})
export class BrowseByCategoryComponent {
  constructor(
    @Inject(CATEGORY_LINK) public links: CategoryLink[],
    // private router: Router,
  ) {}
}
