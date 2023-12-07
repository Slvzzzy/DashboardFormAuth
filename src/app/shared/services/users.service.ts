import {Injectable,} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {userData} from "../../components/users-table/users-table.component";
import {Observable} from "rxjs";

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}
  showUserPage(page = 0, size = 0) : Observable<userData[]>
  {
    const apiUrl = `https://api.github.com/users?page=${page}&per_page=${size}`
    return this.http.get<userData[]>(apiUrl)
  }
}
