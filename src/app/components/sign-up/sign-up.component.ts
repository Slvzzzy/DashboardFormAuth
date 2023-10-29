import {Component, OnInit} from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit  {
  registerForm! : FormGroup;
  constructor(
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)] ),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)])
    })
  }
  getFormControl(controlName: string): FormControl {
    return this.registerForm.get(controlName) as FormControl
  }
  getAuthErrorMessage(fieldName: string) {
    console.log('form', this.registerForm.get(fieldName))
    return
  }
  submit() {
    console.log('Form:', this.registerForm)
    console.log('UserInfo:', this.registerForm.getRawValue())
  }
  signUpComponent() {
    this.authService.signUp(this.registerForm.get('email').value, this.registerForm.get('password').value)
    console.log(this.registerForm.get('email'))
  }
}

