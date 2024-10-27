import { Component } from '@angular/core';

@Component({
  selector: 'app-header-discount',
  standalone: true,
  imports: [],
  templateUrl: './header-discount.component.html',
  styleUrl: './header-discount.component.css',
})
export class HeaderDiscountComponent {
  discountText =
    'Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!';
}
