import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import { ListUsersService } from '@shared/list-users.service';


@NgModule({
    declarations:[
     NavBarComponent,
     ListUsersComponent,
     HomeUserComponent,
    ],
    imports:[CommonModule , UsersRoutingModule],
    providers: [ListUsersService]

})
export class UsersModule {
}
