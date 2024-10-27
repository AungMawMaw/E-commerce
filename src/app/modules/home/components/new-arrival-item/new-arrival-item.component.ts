import { Component, input } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-new-arrival-item',
  standalone: true,
  imports: [],
  templateUrl: './new-arrival-item.component.html',
  styleUrl: './new-arrival-item.component.css',
})
export class NewArrivalItemComponent {
  image = input<string>();
  title = input<string>();
  text = input<string>();
  product = input<Product[]>();

  imageFileLocation = 'assets/images/home/';
  imageSrc() {
    return this.imageFileLocation + this.image();
  }
}
