import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 product: Product;
 message:string;
 errorMessage:string;
 links:string;
 allCategories: String[];
 filteredCategories: Observable<String[]>;
 myControl = new FormControl();

 constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product=new Product();
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
   let photolinks=[];
    if(this.links.length>0){
        photolinks=this.links.split(" ");
    }
    this.product.imageList=photolinks;
    this.productService.addProduct(this.product).subscribe(resp=>{this.message='Product added';
    this.errorMessage='';}, error=>{this.message='';
    this.errorMessage=error.error.message});

  }
}
