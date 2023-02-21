import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private _http = inject(HttpClient);

  selectedProducts: Product[] = [];

  $selectedProducts = new BehaviorSubject<Product[] | null>(null);
  selectedProducts$ = this.$selectedProducts.asObservable();

  constructor() {}

  getItems(): Observable<Product[]> {
    return this._http.get<Product[]>('https://fakestoreapi.com/products');
  }

  clearSelectedProducts() {
    this.selectedProducts = [];
    this.$selectedProducts.next(null);
  }

  addProduct(product: Product) {
    if (this.selectedProducts.length === 0) {
      product.amount = 1;
      this.selectedProducts.push(product);
      this.$selectedProducts.next(this.selectedProducts);
      return;
    }

    for (let i = 0; i < this.selectedProducts.length; i++) {
      if (product.id === this.selectedProducts[i].id) {
        this.selectedProducts[i].amount++;
        return;
      }
    }
    product.amount = 1;
    this.selectedProducts.push(product);
    this.$selectedProducts.next(this.selectedProducts);
  }

  calculateTotal() {
    return this.selectedProducts.reduce((acc, current) => {
      let total = current.price * current.amount;
      return acc + total;
    }, 0);

    console.log(this.selectedProducts);
  }

  removeDuplicates() {
    return this.selectedProducts.filter(
      (item, index) => this.selectedProducts.indexOf(item) === index
    );
  }
}
