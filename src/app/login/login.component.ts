import { Component, OnInit } from '@angular/core';
import {UserCredentials} from "../model/UserCredentials";
import {User} from "../model/User";
import {UserService} from "../service/user.service";
import {URLs} from "../util/URLs";
import {Router} from "@angular/router";

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
    this.userService.login(this.userCredentials).subscribe(resp=>{ this.router.navigate([URLs.FRONT_LOGIN_PAGE]);}, error => {this.errorMessage=error.error.message;})

  }

  signUp() {
this.userService.addUser(this.user).subscribe(resp=>{location.reload();})
  }
}
