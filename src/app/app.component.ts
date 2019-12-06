import { Component } from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-angular-basic';
  productList: Product[];
  buyItems = 0;

  getProductList() {
    this.productList = [
      {
        id: 1,
        name: 'iPhone',
        price: 1000
      },

      {
        id: 2,
        name: 'Samsung',
        price: 500
      }
    ]
    ;
  }

  addToCart(product: Product) {
    this.buyItems += product.price;
  }
}
