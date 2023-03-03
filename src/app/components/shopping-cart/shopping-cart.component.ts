import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { tap } from 'rxjs';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartComponent implements OnInit {
  private readonly _shoppingService = inject(ShoppingService);

  selectedProducts$ = this._shoppingService.selectedProducts$.pipe(
    tap(console.log)
  );

  total = 0;

  constructor() {}

  ngOnInit(): void {
    this.total = this._shoppingService.calculateTotal(); // fix later
  }

  updateAmount() {
    this.total = this._shoppingService.calculateTotal();
  }

  clearCart() {
    this._shoppingService.clearSelectedProducts();
  }
}
