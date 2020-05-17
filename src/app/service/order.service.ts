import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {URLs} from "../util/URLs";
import {Order} from "../model/Order";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  httpOptions = {
    headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*', 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {
  }

  getAllOrders(id:string): Observable<Order[]>{
    return this.httpClient.get<Order[]>(URLs.ALL_ORDERS+id, this.httpOptions);
  }
  addProductToCart(id: string, product: Product):Observable<Order>{
    return this.httpClient.post<Order>(URLs.ADD_PRODUCT_TO_CART+id, product, this.httpOptions);
  }
  removeOrderFromCart(id: string, product: Product):Observable<Order>{
    return this.httpClient.post<Order>(URLs.REMOVE_PRODUCT_FROM_CART+id, product, this.httpOptions);
  }
  getShoppingCart(id: string): Observable<Order>{
    return this.httpClient.get<Order>(URLs.SHOPPING_CART+id, this.httpOptions);
  }
}
