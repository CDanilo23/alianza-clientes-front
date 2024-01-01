import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import { ListUsersService } from '@shared/list-users.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterUserByNamePipe } from '../../shared/pipes/filter-user-by-name/filter-user-by-name.pipe';


@NgModule({
    declarations:[
     NavBarComponent,
     ListUsersComponent,
     HomeUserComponent,
     CreateUserComponent,
     //Se declara el pipe
     FilterUserByNamePipe
    ],
    imports:[
     CommonModule ,
     UsersRoutingModule, 
     ReactiveFormsModule,
     FormsModule
    ],
    providers: [ListUsersService]

})
export class UsersModule {
}
