import {Component, OnInit,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form : FormGroup;
  constructor(
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)] ),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)])
    })
  }
  submit() {
    console.log('Form:', this.form)
    console.log('UserInfo:', this.form.getRawValue())
  }
  getAuthErrorMessage(fieldName: string) {
    console.log('form', this.form.get(fieldName))
    if (this.form.get(fieldName)?.hasError('required')) {
      return `Поле ${fieldName} пустое`;
    }
    if (this.form.get(fieldName)?.hasError('minlength')) {
      return `${fieldName} слишком короткий`;
    }
    if (this.form.get(fieldName)?.hasError('maxlength')) {
      return `${fieldName} слишком длинный`;
    }
    return 'error'
  }
  getFormControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl
  }

  signInComponent() {
    this.authService.signIn(this.form.get('email').value, this.form.get('password').value)
    console.log(this.form.get('email'))
  }
}
