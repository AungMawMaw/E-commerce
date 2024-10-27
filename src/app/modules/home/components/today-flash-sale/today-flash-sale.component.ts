import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-today-flash-sale',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './today-flash-sale.component.html',
  styleUrl: './today-flash-sale.component.css',
})
export class TodayFlashSaleComponent {}
