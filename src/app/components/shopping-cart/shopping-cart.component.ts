import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartComponent implements OnInit {
  private _shoppingService = inject(ShoppingService);

  selectedProducts$ = this._shoppingService.selectedProducts$;

  constructor() {}

  ngOnInit(): void {}

  clearCart() {
    this._shoppingService.clearSelectedProducts();
  }
}
