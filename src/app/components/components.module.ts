import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingItemComponent,
    ShoppingCartComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, RouterModule],
  exports: [ShoppingListComponent, ShoppingItemComponent],
})
export class ComponentsModule {}
