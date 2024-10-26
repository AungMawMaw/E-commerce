import { InjectionToken, Provider } from '@angular/core';

export interface NavLink {
  label: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Contact', path: '/contact' },
  { label: 'About', path: '/about' },
  { label: 'Sign Up', path: '/signUp' },
];
export const NAV_LINK = new InjectionToken<NavLink[]>('main-nav-link');

export const NavLinkProvider: Provider = {
  provide: NAV_LINK,
  useValue: navLinks,
};
