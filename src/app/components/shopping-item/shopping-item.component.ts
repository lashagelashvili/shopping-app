import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss'],
})
export class ShoppingItemComponent implements OnInit {
  @Output() addItemEvent = new EventEmitter<Product>();
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    this.addItemEvent.emit(this.product);
  }
}
