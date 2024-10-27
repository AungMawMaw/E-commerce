import { InjectionToken, Provider } from '@angular/core';

export interface CustomerServiceLink {
  icon: string;
  title: string;
  text: string;
}

export const customerServicesLinks: CustomerServiceLink[] = [
  {
    icon: 'delivery.svg',
    title: 'FREE AND FAST DELIVERY',
    text: 'Free delivery for all orders over $140',
  },
  {
    icon: 'customerService.svg',
    title: '24/7 CUSTOMER SERVICE',
    text: 'Friendly 24/7 customer support',
  },
  {
    icon: 'secure.svg',
    title: 'MONEY BACK GUARANTEE',
    text: 'We reurn money within 30 days',
  },
];
export const CUSTOMER_SERVICE_LINK = new InjectionToken<CustomerServiceLink[]>(
  'main-customer-service-link',
);

export const CustomerServiceLinkProvider: Provider = {
  provide: CUSTOMER_SERVICE_LINK,
  useValue: customerServicesLinks,
};
