import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {URLs} from "../util/URLs";
import {Order} from "../model/Order";

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

  getShoppingCart(id: string): Observable<Order>{
    return null;
  }
}
