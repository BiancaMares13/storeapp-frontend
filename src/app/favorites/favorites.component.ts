import {Component, OnInit} from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";
import {Constants} from "../util/Constants";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService,  private dialog: MatDialog) {
    this.products=[];
  }

  ngOnInit() {
    let id=localStorage.getItem(Constants.ID_SESSION_KEY);

    this.productService.getFavorites(id).subscribe(resp=>{this.products=resp;})
  }

  openModalProduct(product: Product) {
  this.dialog.open(ProductDetailsComponent, {
    height: '80%',
    width: '800px',
    data : product
  });
  }

  removeFromFavs(product:Product) {
    let id=localStorage.getItem(Constants.ID_SESSION_KEY);
    debugger
    this.productService.deleteFavorites(id, product).subscribe(resp=>{this.products=resp;});
  }
}
