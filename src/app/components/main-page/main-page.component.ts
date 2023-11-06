import { Component } from '@angular/core';
import {navBarDate} from "../dashboard/navbarData";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public readonly navBarDate = navBarDate;
  constructor(public authService: AuthService) {}
  signOut(): void {
    this.authService.signOut();
  }
}
