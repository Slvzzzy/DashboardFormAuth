import {Injectable} from '@angular/core';
import {
  CanMatch,
  Route,
  Router,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements  CanMatch {
  constructor(private authService: AuthService, private router: Router) {}
  canMatch (
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.authService.isLoggedIn)
    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['sign-in']);
    }
    return true;
  }
}
