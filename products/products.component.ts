import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from './../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input()
  List: IProduct[] = [];

  @Output()
  productSelected: EventEmitter<IProduct> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  onBtnClick(product: IProduct) {
    this.productSelected.emit(product);
  }
}

