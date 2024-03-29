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
  isFormHidden = true;

  getProductList() {
    this.productList = [
      {
        id: 1,
        name: 'iPhone 11',
        price: 1000,
        description: 'Apple product',
        image: 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-2-400x460.png'
      },

      {
        id: 2,
        name: 'Galaxy S10',
        price: 500,
        description: 'Samsung product',
        image: 'https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-black-400x460.png'
      }
    ]
    ;
  }

  addToCart(product: Product) {
    this.buyItems += product.price;
  }

  showForm() {
    this.isFormHidden = !this.isFormHidden;
  }

  addProduct(product: Product) {
    this.productList.push(product);
  }
}
