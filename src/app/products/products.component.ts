import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 products: Product[];
  constructor(private productService: ProductService) {
   this.products = [];}

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(resp=>{
      this.products=resp;
    });
  }

}
