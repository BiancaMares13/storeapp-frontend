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
 categories: String[];
 isFilterActive: boolean=false
  constructor(private productService: ProductService) {
   this.products = [];
   this.categories=[];
 }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(resp=>{
      this.products=resp;
    });
    this.productService.getAllCategories().subscribe(resp=>{
      this.categories=resp;
    });
  }

  findProductByCategory(selectedCategory: string){
  this.isFilterActive=true;
  this.productService.getAllProductsByCategory(selectedCategory).subscribe(resp=>{this.products = resp;});

  }

  disableFilter(){
   this.isFilterActive=false;
    this.productService.getAllProducts().subscribe(resp=>{
      this.products=resp;
    });
  }
}
