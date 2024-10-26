import { Component, Inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINK, NavLink, NavLinkProvider } from './models/nav.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
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
