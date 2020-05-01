import { Component, OnInit } from '@angular/core';
import {OrderService} from "../service/order.service";
import {Order} from "../model/Order";
import {Constants} from "../util/Constants";
import {Product} from "../model/Product";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders: Order[];
error: string;
panelOpenState = false;
noOrderMessage: string='';
  constructor(private orderService: OrderService, private dialog: MatDialog) {
    this.orders=[];
  }

  ngOnInit() {
    this.error='';
    let id=localStorage.getItem(Constants.ID_SESSION_KEY);
    this.orderService.getAllOrders(id).subscribe(resp=>{this.orders=resp;
    if(this.orders.length==0){
      this.noOrderMessage='No recent orders found';}
    },err=>{this.error=err.error.message})

  }

  openModalProduct(product: Product) {
    this.dialog.open(ProductDetailsComponent, {
      height: '80%',
      width: '800px',
      data : product
    });
  }
}
