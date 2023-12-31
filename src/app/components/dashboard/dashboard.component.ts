import { Component, } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import {navBarDate} from "./navbarData";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  constructor(public authService: AuthService) {}
  public readonly navBarDate = navBarDate;
}
