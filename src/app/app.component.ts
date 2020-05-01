import {Component} from '@angular/core';
import {URLs} from "./util/URLs";
import {Constants} from "./util/Constants";
import {UpdateProfileComponent} from "./update-profile/update-profile.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AddProductComponent} from "./add-product/add-product.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import {OrdersComponent} from "./orders/orders.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'woodstories-front';
  isUserLogged: boolean;
  isUserAdmin: boolean= false;


  constructor( private router: Router,
              private dialog: MatDialog){
    this.isUserLogged=localStorage.getItem(Constants.USERNAME_SESSION_KEY)!=null;
    this.isUserAdmin=localStorage.getItem(Constants.ROLE_SESSION_KEY)=='ROLE_ADMIN';

  }
  redirectToLogin() {
    this.isUserLogged=false;
    this.router.navigate([URLs.FRONT_LOGIN_PAGE]);
  }

  logout() {
    this.isUserLogged=false;
    localStorage.removeItem(Constants.USERNAME_SESSION_KEY);
    localStorage.removeItem(Constants.ID_SESSION_KEY);
    localStorage.removeItem(Constants.SURNAME_SESSION_KEY);
    location.reload();

  }

  openModalUpdateProfile() {
    this.dialog.open(UpdateProfileComponent, {
      height: '90%',
      width: '600px'
    });

  }

  addProduct() {
    this.dialog.open(AddProductComponent, {
      height: '90%',
      width: '650px'
    });
  }
  viewFavs() {
    this.dialog.open(FavoritesComponent, {
      height: '90%',
      width: '650px'
    });
  }

  openViewOrders() {
    this.dialog.open(OrdersComponent, {
      height: '90%',
      width: '850px'
    });
  }
}
