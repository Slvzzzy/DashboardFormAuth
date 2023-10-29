import { Component } from '@angular/core';
import {navBarDate} from "../dashboard/navbarData";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(public authService: AuthService) {}
  public readonly navBarDate = navBarDate;
  signOut(): void {
    this.authService.signOut();
  }
}
