import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";
import {UpdateProfileComponent} from "../update-profile/update-profile.component";
import {MatDialog} from "@angular/material/dialog";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {Constants} from "../util/Constants";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AddProductComponent} from "../add-product/add-product.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 products: Product[];
 categories: String[];
 isFilterActive: boolean=false;
 message: string;
  isAdmin: boolean=false;
  constructor(private productService: ProductService,  private dialog: MatDialog, private _snackBar: MatSnackBar) {
   this.products = [];
   this.categories=[];
   this.message='';

 }

  ngOnInit(): void {

    this.isAdmin=localStorage.getItem(Constants.ROLE_SESSION_KEY)=='ROLE_ADMIN';
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
  addProductToFav(product: Product){
   let userId=localStorage.getItem(Constants.ID_SESSION_KEY);
    this.productService.addToFav(userId, product).subscribe(
      resp=>{
          this.message='Added to favorites!';
         this.openSnackBar( this.message,'Close');},
      error =>{
      this.message=error.error.message;
      this.openSnackBar( this.message,'Close')});
  }

  disableFilter(){
   this.isFilterActive=false;
    this.productService.getAllProducts().subscribe(resp=>{
      this.products=resp;
    });
  }



  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openPopupProduct(product: Product) {

    this.dialog.open(ProductDetailsComponent, {
      height: '80%',
      width: '800px',
      data : product
    });


  }

  updateProduct(product: Product) {
    this.dialog.open(AddProductComponent, {
      height: '90%',
      width: '650px',
      data : product
    });
  }


  deleteProduct(product: Product) {
    this.productService.delete(product.id).subscribe(resp=>{this.message='Deleted!'}, error =>{this.message=error.error.message;});
    location.reload();
    this.openSnackBar( this.message,'Close');
  }

}
