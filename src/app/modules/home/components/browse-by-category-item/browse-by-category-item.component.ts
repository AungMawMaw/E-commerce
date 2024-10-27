import { Component, input } from '@angular/core';
import { CategoryLink } from '../../models/products.model';

@Component({
  selector: 'app-browse-by-category-item',
  standalone: true,
  imports: [],
  templateUrl: './browse-by-category-item.component.html',
  styleUrl: './browse-by-category-item.component.css',
})
export class BrowseByCategoryItemComponent {
  categoryLink = input.required<CategoryLink>();
  get imageUrl() {
    return 'assets/icons/' + this.categoryLink().iconUrl;
  }
}
