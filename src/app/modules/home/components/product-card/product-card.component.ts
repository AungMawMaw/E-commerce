import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {}
