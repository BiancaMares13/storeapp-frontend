import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";
import {UpdateProfileComponent} from "../update-profile/update-profile.component";
import {MatDialog} from "@angular/material/dialog";
import {ProductDetailsComponent} from "../product-details/product-details.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 products: Product[];
 categories: String[];
 isFilterActive: boolean=false
  constructor(private productService: ProductService,  private dialog: MatDialog) {
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

  openPopupProduct(product: Product) {

    this.dialog.open(ProductDetailsComponent, {
      height: '80%',
      width: '800px',
      data : product
    });


  }
}
