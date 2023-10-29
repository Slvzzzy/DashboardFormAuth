import {inject, Injectable} from '@angular/core';
import {
  CanLoad,
  CanMatch,
  CanMatchFn,
  Route,
  Router,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import {Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements  CanLoad, CanMatch {
  constructor(private authService: AuthService, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(this.authService.isLoggedIn)
    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['sign-in']);
    }
    return true;
  }
  isLoggedIn(): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['sign-in']);
    }
    return true;
  }
  canMatch:CanMatchFn = this.isLoggedIn;
}
