import { Component } from '@angular/core';
import { FooterListComponent } from './components/footer-list/footer-list.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterListComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
