import { Component, Inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import {
  MANAGE_ACC_LINK,
  manageAccLinksProvider,
  ORDER_LINK,
  orderLinksProvider,
} from './models/account.model';
import { NavLink } from '../../layouts/header/models/nav.model';
import { RouteDisplayComponent } from '../../shared/components/route-display/route-display.component';
import { ContainerComponent } from '../../shared/components/container/container.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouteDisplayComponent,
    ContainerComponent,
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  providers: [manageAccLinksProvider, orderLinksProvider],
})
export class AccountComponent {
  constructor(
    @Inject(MANAGE_ACC_LINK) public manageLinks: NavLink[],
    @Inject(ORDER_LINK) public orderLinks: NavLink[],
    private router: Router,
  ) {}
}
