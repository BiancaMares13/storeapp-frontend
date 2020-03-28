import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string;
  constructor() {
   this.message="initial"}


  ngOnInit(): void {
  }
    doThis():void{
    debugger
    this.message="am schimbat valoarea";
}
}
