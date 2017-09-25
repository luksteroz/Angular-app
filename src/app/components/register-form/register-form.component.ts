import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../utils/custom-validators";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      interest: new FormGroup({
        tv: new FormControl(''),
        sport: new FormControl(''),
        tech: new FormControl('')
      }, CustomValidators.atLeastOneShouldBeSelected),
      emailGroup: new FormGroup({
        email: new FormControl(),
        emailConfirm: new FormControl()
      }, CustomValidators.emailShouldBeEquals)
    })
  }

  ngOnInit() {
  }

}
