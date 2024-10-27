import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  private _error = new BehaviorSubject<string>('');

  public error$ = this._error.asObservable();

  showError(message: string) {
    this._error.next(message);
  }
  clearError() {
    this._error.next('');
  }
}
