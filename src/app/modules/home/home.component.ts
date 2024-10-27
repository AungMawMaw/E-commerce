import { Component } from '@angular/core';
import { DiscountBannerComponent } from './components/discount-banner/discount-banner.component';
import { SiderComponent } from './components/sider/sider.component';
import { TodayFlashSaleComponent } from './components/today-flash-sale/today-flash-sale.component';
import { ContainerComponent } from '../../shared/components/container/container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DiscountBannerComponent,
    SiderComponent,
    TodayFlashSaleComponent,
    ContainerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
