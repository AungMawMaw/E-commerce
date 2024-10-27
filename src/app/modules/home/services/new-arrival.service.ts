import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/enviroment';
import { BehaviorSubject, tap } from 'rxjs';
import { NewArrival } from '../models/newArrival.model.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewArrivalService {
  private URL = environment.newArivalApiUrl;

  private _newArrival = new BehaviorSubject<NewArrival[]>([]);

  public newArrivals$ = this._newArrival.asObservable();

  constructor(private http: HttpClient) {}

  loadProduct() {
    return this.http
      .get<NewArrival[]>(this.URL, {
        observe: 'body', // NOTE:body is default
        headers: {
          'Cache-Control': 'no-cache', // Prevent caching
          Pragma: 'no-cache', // HTTP/1.0 compatibility
          Expires: '0', // Prevent caching
        },
      })
      .pipe(
        tap((newArrivals) => {
          this._newArrival.next(newArrivals);
        }),
      );
  }
}
