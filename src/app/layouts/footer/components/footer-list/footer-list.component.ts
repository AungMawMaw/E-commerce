import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer-list',
  standalone: true,
  imports: [],
  templateUrl: './footer-list.component.html',
  styleUrl: './footer-list.component.css',
})
export class FooterListComponent {
  title = input.required<string>();
}
