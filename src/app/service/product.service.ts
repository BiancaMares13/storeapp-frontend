import { Injectable } from '@angular/core';
import {Product} from "../model/Product";
import {URLs} from "../util/URLs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {User} from "../model/User";

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
  getAllCategories(): Observable<String[]>{
    return this.httpClient.get<String[]>(URLs.ALL_CATEGORY, this.httpOptions);
  }

  getAllProductsByCategory(category: string): Observable<Product[]>{
    return this.httpClient.get<Product[]>(URLs.ALL_PRODUCTS_BY_CATEGORY+category, this.httpOptions);
  }

  addProduct(product: Product) {
    return this.httpClient.post<Product>(URLs.ADD_PRODUCT, product, this.httpOptions);

  }
}
