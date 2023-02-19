import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomepageComponent } from './layout/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'shopping-list', pathMatch: 'full' },
  { path: 'shopping-list', component: HomepageComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '**', redirectTo: 'shopping-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
