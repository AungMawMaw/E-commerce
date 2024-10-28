import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-double-bg',
  standalone: true,
  imports: [],
  templateUrl: './icon-double-bg.component.html',
  styleUrl: './icon-double-bg.component.css',
})
export class IconDoubleBgComponent {
  @Input() smallBgColor: string = 'bg-primary ';
  @Input() bigBgColor: string = 'bg-primary-gray ';
  @Input() icon: string = 'shop.svg';

  iconDir = 'assets/icons/';
  get iconSrc() {
    return this.iconDir + this.icon;
  }
}
