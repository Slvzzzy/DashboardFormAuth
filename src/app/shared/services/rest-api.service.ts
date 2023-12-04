import {Injectable,} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {userData} from "../../components/rest-api/rest-api.component";
import {Observable} from "rxjs";

@Injectable()
export class RestApiService {
  apiURL = 'https://api.github.com/users?page=1&per_page=70';
  res: any
  constructor(private http: HttpClient) {}
  showUserPage() : Observable<userData[]>
  {
    return this.http.get<userData[]>(this.apiURL)
  }
}
