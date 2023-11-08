import {Component, OnInit,} from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm : FormGroup;
  constructor(
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
        Validators.maxLength(30)])
    })
  }
  forgotPassword() {
    this.authService.forgotPassword(this.forgotPasswordForm.get('email').value)
  }
}
