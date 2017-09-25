import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthServiceInterface} from "./auth.service.interface";
import {Settings} from "../utils/settings";
import "rxjs/add/operator/filter";

@Injectable()
export class AuthService implements AuthServiceInterface {
access: boolean = false;
  constructor(private http:HttpClient) {
    this.isAuthenticated()
  }

  isAuthenticated(): void {
    this.http.get<{ok, error}>(Settings.AUTH)
      .filter((resp) => {
          if (resp.ok) {
            return true
          } else {
            alert('asdasd');
          }
      })
      .subscribe((resp)=>{
        this.access = resp.ok;
      })
  }

  logIn(loginData): void {
    console.log(loginData);
    this.http.post(Settings.LOGIN_END_POINT, loginData)
      .subscribe((resp) => {
      console.log(resp);
        this.access = resp['ok'];
      })
  }

  logOut(): void {
    this.http.get(Settings.LOGOUT_END_POINT)
    .subscribe((data) => {
      this.access = false;
    })
  }
}
