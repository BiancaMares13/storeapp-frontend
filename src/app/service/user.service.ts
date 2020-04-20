import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/User";
import {URLs} from "../util/URLs";
import {UserCredentials} from "../model/UserCredentials";
import {sha256} from "js-sha256";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*', 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    return this.http.post<User>(URLs.SIGN_UP, user, this.httpOptions);
  }
  login(userCredentials: UserCredentials) {
    userCredentials.password=sha256(userCredentials.password);
    return this.http.post<User>(URLs.LOGIN_URL, userCredentials, this.httpOptions);
  }
  updateUser(user: User) {
    return this.http.post<User>(URLs.UPDATE_USER, user, this.httpOptions);
  }

  getUserById(id: number) {
    return this.http.get<User>(URLs.USER_By_ID+id, this.httpOptions);
  }

  deleteUser(id: string) {
    return this.http.delete<User>(URLs.DELETE_USER+id, this.httpOptions);

  }
}
