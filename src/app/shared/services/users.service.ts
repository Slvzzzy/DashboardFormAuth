import {Injectable,} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {userData} from "../../components/users-table/users-table.component";
import {Observable, Subscription} from "rxjs";
import {Params} from "@angular/router";

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}
  showUserPage(page = 0, size = 0) : Observable<userData[]>
  {
    const apiUsersUrl = `https://api.github.com/users?page=${page}&per_page=${size}`
    return this.http.get<userData[]>(apiUsersUrl)
  }

  showUserProfile(id: number) :  Observable<userData>
  {
    const apiProfileUrl = `https://api.github.com/user/${id}`
    return this.http.get<userData>(apiProfileUrl)
  }
}
