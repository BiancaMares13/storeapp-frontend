import {Component, Inject, OnInit, Optional} from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 message:string;
 errorMessage:string;
 links:string;
 allCategories: String[];
 filteredCategories: Observable<String[]>;
 myControl = new FormControl();
 isAddProd: boolean =true;

 constructor(private productService: ProductService, @Optional() @Inject(MAT_DIALOG_DATA) public product: Product) {
   if(product!=null){
     this.isAddProd=false;
   }else{
     this.product=new Product();
   }
 }

  ngOnInit() {
    this.message='';
    this.errorMessage='';
    this.links='';
    this.allCategories=[];
    this.productService.getAllCategories().subscribe(resp=>{this.allCategories=resp;});
      this.filteredCategories = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

  }
  private _filter(value: string): String[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(option => option.toLowerCase().includes(filterValue));
  }


  addProduct() {
   let photoLinks=[];
    if(this.links.length>0){
      photoLinks=this.links.split(" ");
    }
    this.product.imageList=photoLinks;
    this.productService.addProduct(this.product).subscribe(resp=>{this.message='Product added';
    this.errorMessage='';}, error=>{this.message='';
    this.errorMessage=error.error.message});

  }
  updateProduct() {
    let photoLinks=[];
    if(this.links.length>0){
      photoLinks=this.links.split(" ");
    }
    this.product.imageList=photoLinks;
    this.productService.updateProduct(this.product).subscribe(resp=>{this.message='Product updated';
      this.errorMessage='';}, error=>{this.message='';
      this.errorMessage=error.error.message});
}
}
