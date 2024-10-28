import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RouteDisplayComponent } from '../../shared/components/route-display/route-display.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [ButtonComponent, RouteDisplayComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {}
