import { Injectable } from '@angular/core';
import {Product} from "../model/Product";
import {URLs} from "../util/URLs";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {   id: 1, productName: 'Masa', productDescription:'O masa exccelenta pentru pus in orice camera', price: 200, category: 'mobilier',
  imageLink: 'https://vdxl.im/8718475567219_m_en_r458.jpg',},
    {   id: 2, productName: 'Scaun', productDescription:'O masa exccelenta pentru pus in orice camera', price: 200, category: 'mobilier',
      imageLink: 'https://vdxl.im/8718475567219_m_en_r458.jpg',},
    {   id: 3, productName: 'Masa verde', productDescription:'O masa exccelenta pentru pus in orice camera', price: 200, category: 'mobilier',
      imageLink: 'https://vdxl.im/8718475567219_m_en_r458.jpg',},
    {   id: 4, productName: 'Tocator', productDescription:'O masa exccelenta pentru pus in orice camera', price: 200, category: 'ustensile bucatarie',
      imageLink: 'https://vdxl.im/8718475567219_m_en_r458.jpg',},
  ];
  constructor(  private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
  //  return this.http.get<Product[]>(URLs.ALL_PRODUCTS);  // call catre serverul real de Tomcat
    return of(this.products); // test de moment
  }
}
