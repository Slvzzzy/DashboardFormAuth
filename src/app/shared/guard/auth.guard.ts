import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authGuard = () => inject(AuthService).isLoggedIn;
