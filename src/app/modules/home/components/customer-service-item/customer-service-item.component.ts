import { Component, input } from '@angular/core';
import { CustomerServiceLink } from '../../models/customerService.model';

@Component({
  selector: 'app-customer-service-item',
  standalone: true,
  imports: [],
  templateUrl: './customer-service-item.component.html',
  styleUrl: './customer-service-item.component.css',
})
export class CustomerServiceItemComponent {
  customerServiceLink = input.required<CustomerServiceLink>();
  imageFileLocation = 'assets/icons/';
  imageSrc() {
    return this.imageFileLocation + this.customerServiceLink().icon;
  }
}
