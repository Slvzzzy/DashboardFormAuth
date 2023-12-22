import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {UsersTableComponent} from "./components/users-table/users-table.component";
import {UserInfoComponent} from "./components/user-info/user-info.component";

const userRoutes: Routes = [
  {path: '', component: UsersTableComponent,},
  {path: ':id',  component: UserInfoComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
