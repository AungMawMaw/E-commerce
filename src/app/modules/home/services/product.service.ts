import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/enviroment';
import { BehaviorSubject, map, Observable, tap, timestamp } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private URL = environment.productsApiUrl || 'http://localhost:3000';

  private _products = new BehaviorSubject<Product[]>([]);

  public products$ = this._products.asObservable();

  constructor(private http: HttpClient) {}

  loadProduct() {
    return this.http
      .get<Product[]>(this.URL, {
        observe: 'body', // NOTE:body is default
        headers: {
          'Cache-Control': 'no-cache', // Prevent caching
          Pragma: 'no-cache', // HTTP/1.0 compatibility
          Expires: '0', // Prevent caching
        },
      })
      .pipe(
        tap((products) => {
          console.log(products);
          this._products.next(products);
        }),
      );
  }

  // loadProduct() {
  // this.fetch(this.URL).subscribe((products) => this._products.next(products));
  // }

  private fetch(url: string): Observable<Product[]> {
    return this.http
      .get<Product[]>(url, {
        observe: 'body',
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Expires: '0',
        },
      })
      .pipe(map((resData) => resData));
  }

  private _generateUniqueId(): string {
    return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }
}
