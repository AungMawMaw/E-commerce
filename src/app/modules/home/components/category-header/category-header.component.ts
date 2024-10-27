import { Component, input } from '@angular/core';

@Component({
  selector: 'app-category-header',
  standalone: true,
  imports: [],
  templateUrl: './category-header.component.html',
  styleUrl: './category-header.component.css',
})
export class CategoryHeaderComponent {
  headerTitle = input.required<string>();
  title = input.required<string>();
  // headerTitle = " Today's";
  // title = 'Flash Sales';
}
