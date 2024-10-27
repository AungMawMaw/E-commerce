import { Component, Inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINK, NavLink, NavLinkProvider } from './models/nav.model';
import { HeaderDiscountComponent } from './components/header-discount/header-discount.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, HeaderDiscountComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [NavLinkProvider],
})
export class HeaderComponent {
  constructor(
    @Inject(NAV_LINK) public links: NavLink[],
    private router: Router,
  ) {}
}
