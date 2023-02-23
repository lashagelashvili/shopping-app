import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  private readonly _shoppingService = inject(ShoppingService);
  private readonly _router = inject(Router);

  products$ = this._shoppingService.getItems().pipe(tap(console.log));

  constructor() {}

  ngOnInit() {
    console.log('init');
  }

  addItem(product: Product) {
    this._shoppingService.addProduct(product);
  }

  goToCart() {
    this._router.navigateByUrl('/shopping-cart');
  }
}
