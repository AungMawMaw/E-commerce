import { Component, Inject } from '@angular/core';
import { CustomerServiceItemComponent } from '../customer-service-item/customer-service-item.component';
import {
  CUSTOMER_SERVICE_LINK,
  CustomerServiceLink,
  CustomerServiceLinkProvider,
} from '../../models/customerService.model';

@Component({
  selector: 'app-customer-service',
  standalone: true,
  imports: [CustomerServiceItemComponent],
  templateUrl: './customer-service.component.html',
  styleUrl: './customer-service.component.css',
  providers: [CustomerServiceLinkProvider],
})
export class CustomerServiceComponent {
  constructor(
    @Inject(CUSTOMER_SERVICE_LINK) public links: CustomerServiceLink[],
    // private router: Router,
  ) {}
}
