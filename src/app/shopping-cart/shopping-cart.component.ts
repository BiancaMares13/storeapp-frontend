import { Component, OnInit } from '@angular/core';
import {Order} from "../model/Order";
import {OrderService} from "../service/order.service";
import {Constants} from "../util/Constants";
import {Product} from "../model/Product";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  order: Order;
  isEmpty: boolean;
  messageEmptyBasket = "No products added to shopping cart";
  errMessage: string="";

  constructor(private orderService: OrderService,  private dialog: MatDialog) {
  this.order=new Order();
  }

  ngOnInit() {
    this.isEmpty=false;
    let id = localStorage.getItem(Constants.ID_SESSION_KEY);
    this.orderService.getShoppingCart(id).subscribe(resp=>{this.order=resp; console.log(this.order)});
    if( this.order.productList.length==0) {
      this.isEmpty=true;
    }

  }

  openModalProduct(product: Product) {
    this.dialog.open(ProductDetailsComponent, {
      height: '80%',
      width: '800px',
      data : product
    });
  }

  removeFromCart(product: Product) {
    let id = localStorage.getItem(Constants.ID_SESSION_KEY);
    this.orderService.removeOrderFromCart(id,product).subscribe(resp=>{this.order=resp;location.reload()}, err=>{this.errMessage=err.error.message;
    })
  }
}
