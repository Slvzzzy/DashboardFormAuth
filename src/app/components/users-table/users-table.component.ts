import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {UsersService} from "../../shared/services/users.service";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {LowerCasePipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import { AuthService } from '../../shared/services/auth.service';
import {navBarDate} from "../dashboard/navbarData";
import {Subject, takeUntil} from "rxjs";

export interface userData {
  login: string;
  position: number;
  id: number;
  url: string;
  img: string;
}

const ELEMENT_DATA: userData[] = []

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  standalone: true,
  providers: [UsersService],
  imports: [MatTableModule, MatPaginatorModule, LowerCasePipe, NgForOf, NgIf, RouterLinkActive, RouterLink],
})
export class UsersTableComponent implements AfterViewInit, OnDestroy {
  public readonly navBarDate = navBarDate;
  displayedColumns: string[] = ['position', 'login', 'img', 'id', 'url'];
  dataSource = new MatTableDataSource<userData>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageIndex: number;
private destroy$ = new Subject<void>()
  constructor
  (private userService: UsersService,
   private authService: AuthService
  ) {this.onUserSubscribeData()
  }
  onUserSubscribeData() {
    this.userService.showUserPage()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        (userData) => {
          this.dataSource.data = userData
          console.log(userData)
        }
      )
  }
  signOut() {
    this.authService.signOut();
  }
  onPaginateChange(event) {
    this.pageIndex = event.pageIndex
    this.userService.showUserPage(this.pageIndex, 7)

    console.log(event.pageIndex);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
  }
}
