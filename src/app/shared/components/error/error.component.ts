import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorService } from '../../../core/services/error.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {
  public error$: Observable<string>;
  constructor(private errorService: ErrorService) {
    this.error$ = this.errorService.error$;
  }
  onClose() {
    this.errorService.clearError();
  }
}
