import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-roundedfull',
  standalone: true,
  imports: [],
  templateUrl: './roundedfull.component.html',
  styleUrl: './roundedfull.component.css',
})
export class RoundedfullComponent {
  @Input() bgColor: string = 'bg-secondary';
}
