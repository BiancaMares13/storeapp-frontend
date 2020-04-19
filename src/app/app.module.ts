import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { HttpClientModule} from "@angular/common/http";
import {ProductService} from "./service/product.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {MatChipsModule} from "@angular/material/chips";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSidenavModule} from "@angular/material/sidenav";
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {MatDialogConfig, MatDialogModule} from "@angular/material/dialog";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {NgxGalleryModule} from "ngx-gallery";
import {MatTooltipModule} from "@angular/material/tooltip";
import { AddProductComponent } from './add-product/add-product.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { FavoritesComponent } from './favorites/favorites.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    UpdateProfileComponent,
    ProductDetailsComponent,
    AddProductComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    MatChipsModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    NgxGalleryModule,
    MatTooltipModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatListModule
  ],
  providers: [ProductService, MatDialogConfig],
  entryComponents: [ProductDetailsComponent, UpdateProfileComponent, AddProductComponent, FavoritesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
