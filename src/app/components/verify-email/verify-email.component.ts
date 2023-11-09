import { Component,} from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import {User} from "../../shared/services/user";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent{

  constructor(
    private authService: AuthService
  ) { }

  get user(): User {
    return  this.authService.userData
  }

  sendVerificationMail() {
    this.authService.sendVerificationMail()
  }
}
