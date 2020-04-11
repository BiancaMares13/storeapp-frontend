import {Component} from '@angular/core';
import {URLs} from "./util/URLs";
import {Constants} from "./util/Constants";
import {UpdateProfileComponent} from "./update-profile/update-profile.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'woodstories-front';
  isUserLogged: boolean;

  constructor( private router: Router,
              private dialog: MatDialog){
    this.isUserLogged=localStorage.getItem(Constants.USERNAME_SESSION_KEY)!=null;
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
      height: '60%',
      width: '500px'
    });

  }
}
