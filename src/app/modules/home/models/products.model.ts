export type Category =
  | 'electronics'
  | 'smartphone'
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
