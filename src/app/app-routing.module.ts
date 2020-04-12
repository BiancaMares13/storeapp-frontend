import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProductsComponent} from './products/products.component';
import {URLs} from "./util/URLs";
import {ProductDetailsComponent} from "./product-details/product-details.component";


const routes: Routes = [
  {
    path: URLs.FRONT_LOGIN_PAGE,
    component: LoginComponent},
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: URLs.FRONT_PRODUCTS_PAGE,
    component: ProductsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
