import { Component, } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import {navBarDate} from "../dashboard/navbarData";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  constructor(public authService: AuthService) {}
  public readonly navBarDate = navBarDate;
}
