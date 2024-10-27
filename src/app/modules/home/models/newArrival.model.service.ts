import { extend } from 'lodash';
import { Product } from './products.model';

export interface NewArrival {
  image: string;
  title: string;
  text: string;
  product: Product[];
}
