import { Component } from '@angular/core';
import { RoundedfullComponent } from '../../../../shared/components/roundedfull/roundedfull.component';

@Component({
  selector: 'app-next-and-previous',
  standalone: true,
  imports: [RoundedfullComponent],
  templateUrl: './next-and-previous.component.html',
  styleUrl: './next-and-previous.component.css',
})
export class NextAndPreviousComponent {}
