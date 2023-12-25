import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
// route guard
import { authGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', redirectTo:'main-page', pathMatch: 'full' },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'users',
      loadChildren: () => import('./user-routing.module')
      .then(module => module.UserRoutingModule)
  },
  { path: 'main-page', component: MainPageComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'sign-in', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
