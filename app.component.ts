import { Component, VERSION } from '@angular/core';
interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  imgUrl: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalCount;
  productList: IProduct[] = [
    {
      id: 'iph123',
      title: 'Iphone8',
      description: 'This is iphone8',
      price: 100,
      imgUrl: 'https://www.shopwish.in/wp-content/uploads/2021/01/iphone-9.png'
    },
    {
      id: 'sam123',
      title: 'Samsung s20',
      description: 'This is samsung s20',
      price: 200,
      imgUrl:
        'https://bingkart.com/4642-large_default/samsung-galaxy-s20-cosmic-gray-8gb-ram-128gb-storage.jpg'
    }
  ];
  cart: any = {};
  onItemAddtoCart(product: IProduct) {
    this.cart[product.id] = this.cart[product.id] || 0;
    this.cart[product.id]++;
    this.totalCount = Object.values(this.cart).reduce(
      (acc: any, curr: any) => acc + curr
    ) as number;
  }
}

