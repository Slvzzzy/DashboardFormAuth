import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule,} from "@angular/forms";
import { environment } from '../environments/enviorment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";

// components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { UserProfileComponent} from './components/user-profile/user-profile.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {UserInfoComponent} from "./components/user-info/user-info.component";
import {UsersTableComponent} from "./components/users-table/users-table.component";
// routing
import { AppRoutingModule } from './app-routing.module';

// service
import { AuthService } from './shared/services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    UserProfileComponent,
    MainPageComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'FormaDashboard'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    UsersTableComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})

export class AppModule {}

