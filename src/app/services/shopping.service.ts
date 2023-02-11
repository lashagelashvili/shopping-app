import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private _http = inject(HttpClient);

  constructor() {}

  getItems(): Observable<any> {
    return this._http.get('https://fakestoreapi.com/products');
  }
}
