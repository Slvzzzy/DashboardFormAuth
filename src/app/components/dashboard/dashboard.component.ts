import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import {navBarDate} from "./navbarData";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  protected readonly navBarDate = navBarDate;
}
