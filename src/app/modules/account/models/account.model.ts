import { InjectionToken, Provider } from '@angular/core';
import { NavLink } from '../../../layouts/header/models/nav.model';

export const manageAccLinks: NavLink[] = [
  { label: 'My Profile', path: '/account/profile' },
  { label: 'Address Book', path: '/account/addressBook' },
  { label: 'My Payment Option', path: '/account/paymentOption' },
];

export const orderLinks: NavLink[] = [
  { label: 'My Return', path: '/account/myReturn' },
  { label: 'My Canellations', path: '/account/mycanellations' },
];
export const MANAGE_ACC_LINK = new InjectionToken<NavLink[]>('acc-manage-link');
export const ORDER_LINK = new InjectionToken<NavLink[]>('acc-order-link');

export const manageAccLinksProvider: Provider = {
  provide: MANAGE_ACC_LINK,
  useValue: manageAccLinks,
};
export const orderLinksProvider: Provider = {
  provide: ORDER_LINK,
  useValue: orderLinks,
};
