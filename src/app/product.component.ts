import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class AppComponent {
  title = 'ShoppingCart';

  product = {
    Name: 'SONY TV',
    Price: 50.00,
    MFG: new Date('2010/21/22'),
    Photo: 'placeHolder.png',
    Qty: '2',
    IsInStock: true
  };
}
