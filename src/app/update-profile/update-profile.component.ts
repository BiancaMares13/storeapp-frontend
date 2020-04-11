import { Component, OnInit } from '@angular/core';
import {User} from "../model/User";
import {Constants} from "../util/Constants";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  user: User;
  message: string='';
  address: string='';
  phone:string='';
  mail:string='';
  constructor(private userService: UserService) {
    this.user=new User();
  }


  ngOnInit(): void {
    this.userService.getUserById(Number(localStorage.getItem(Constants.ID_SESSION_KEY))).subscribe(resp=>{this.user=resp});

  }

  updateProfile() {
    if(this.address.length>0){
      this.user.adress=this.address;
    }
    if(this.phone.length>0){
      this.user.phoneNumber=this.phone;
    }
    if(this.mail.length>0){
      this.user.email=this.mail;
    }
    this.userService.updateUser(this.user).subscribe(resp=>{location.reload()},error => {this.message=error.error.message});
  }
}
