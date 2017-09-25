import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  clickButton(loginForm) {
    console.log(loginForm.valid);
    if (loginForm.valid) {
      this.authService.logIn(loginForm.value);
    }else {
      console.warn('form invalid');
    }
  }
  logOut() {
    this.authService.logOut();
  }
  ngOnInit() {
  }

}
