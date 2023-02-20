import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingItemComponent,
    ShoppingCartComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [ShoppingListComponent, ShoppingItemComponent],
})
export class ComponentsModule {}
