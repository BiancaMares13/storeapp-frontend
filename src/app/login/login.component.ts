import { Component, OnInit } from '@angular/core';
import {UserCredentials} from "../model/UserCredentials";
import {User} from "../model/User";
import {UserService} from "../service/user.service";
import {URLs} from "../util/URLs";
import {Router} from "@angular/router";
import {Constants} from "../util/Constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCredentials: UserCredentials;
  user: User;
  errorMessage: string ='';
  constructor(private userService: UserService, private router: Router) {
    this.user=new User();
    this.userCredentials=new UserCredentials();
}
  ngOnInit(): void {
  }

  login() {
    debugger
    this.userService.login(this.userCredentials).subscribe(resp=>{
        localStorage.setItem(Constants.USERNAME_SESSION_KEY,resp.username);
        localStorage.setItem(Constants.ID_SESSION_KEY,String(resp.id));
        localStorage.setItem(Constants.SURNAME_SESSION_KEY, resp.surname);
        localStorage.setItem(Constants.ROLE_SESSION_KEY, resp.userRole);
    this.router.navigate([URLs.FRONT_PRODUCTS_PAGE]);},
        error => {this.errorMessage=error.error.message;})

  }

  signUp() {
  this.userService.addUser(this.user).subscribe(resp=>{location.reload();}, error => {this.errorMessage=error.error.message;})
  }
}
