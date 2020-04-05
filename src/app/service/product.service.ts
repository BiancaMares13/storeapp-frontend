import { Injectable } from '@angular/core';
import {Product} from "../model/Product";
import {URLs} from "../util/URLs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*', 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {

  }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(URLs.ALL_PRODUCTS, this.httpOptions);
  }

  getAllProductsByCategory(category: string): Observable<Product[]>{
    return this.httpClient.get<Product[]>(URLs.ALL_PRODUCTS_BY_CATEGORY+category, this.httpOptions);
  }
}
