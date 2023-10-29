import { Component, } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import {navBarDate} from "../dashboard/navbarData";
import {signOut} from "@angular/fire/auth";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  constructor(private authService: AuthService) {}
  public readonly navBarDate = navBarDate;

  getUser() {
    return  this.authService.userData
  }
  signOut() {
    this.authService.signOut();
  }
}
