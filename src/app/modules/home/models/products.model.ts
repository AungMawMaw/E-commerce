import { InjectionToken, Provider } from '@angular/core';

export type Category =
  | 'electronics'
  | 'phone'
  | 'computer'
  | 'smartWatch'
  | 'camera'
  | 'headphone'
  | 'gaming'
  | 'clothing'
  | 'accessories'; // Add more categories as needed
export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  categories: Category[];
  rating: number;
  isFavourite: boolean;
  itemsSold: number;
  stock: number;
  discount?: number;
}

export interface CategoryLink {
  type: Category;
  label: string;
  path: string;
  iconUrl: string;
}

export const categoryLink: CategoryLink[] = [
  { type: 'phone', label: 'Phones', path: '/', iconUrl: 'phone.svg' },
  { type: 'computer', label: 'Computers', path: '/', iconUrl: 'computer.svg' },
  {
    type: 'smartWatch',
    label: 'SmartWatchs',
    path: '/',
    iconUrl: 'smartWatch.svg',
  },
  { type: 'camera', label: 'Cameras', path: '/', iconUrl: 'camera.svg' },
  {
    type: 'headphone',
    label: 'headPhone',
    path: '/',
    iconUrl: 'headPhone.svg',
  },
  { type: 'gaming', label: 'Gaming', path: '/', iconUrl: 'gaming.svg' },
];
export const CATEGORY_LINK = new InjectionToken<CategoryLink[]>(
  'home-category-link',
);

export const CategoryLinkProvider: Provider = {
  provide: CATEGORY_LINK,
  useValue: categoryLink,
};
