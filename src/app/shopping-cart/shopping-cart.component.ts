import { Component, OnInit } from '@angular/core';
import {Order} from "../model/Order";
import {OrderService} from "../service/order.service";
import {Constants} from "../util/Constants";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  order: Order;
  isEmpty: boolean;
  messageEmptyBasket = "No products added to shopping cart";

  constructor(private orderService: OrderService) {
    let id = localStorage.getItem(Constants.ID_SESSION_KEY);
 //   this.orderService.getShoppingCart(id).subscribe(resp=>this.order=resp);
    this.order=null;
  }

  ngOnInit() {
    if(this.order==null) {
      this.isEmpty=true;
    }

  }

}
