import { Component } from '@angular/core';
import { IconDoubleBgComponent } from '../../../shared/components/icon-double-bg/icon-double-bg.component';

interface serviceItem {
  icon: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-service-goals',
  standalone: true,
  imports: [IconDoubleBgComponent],
  templateUrl: './service-goals.component.html',
  styleUrl: './service-goals.component.css',
})
export class ServiceGoalsComponent {
  lists: serviceItem[] = [
    {
      icon: 'shop.svg',
      title: '10.5k',
      body: 'Sallers active our site',
    },
    {
      icon: 'sale.svg',
      title: '33k',
      body: 'Monthly Produduct Sale',
    },

    {
      icon: 'shoppingBag.svg',
      title: '32.1k',
      body: 'Customer active in our site',
    },

    {
      icon: 'moneyBag.svg',
      title: '32.1k',
      body: 'Anual gross sale in our site',
    },
  ];
}
