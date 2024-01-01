import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListUsersService } from '@shared/list-users.service';
import { Subscription } from 'rxjs';
import { UsersService } from '../create-user/shared/services/users/users.service';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  users: any[] = [];
  searchTerm: string = '';
  private subscriptions: Subscription[] = [];

  constructor(private listUsersService : ListUsersService,
    private usersService: UsersService,
    private httpClient: HttpClient ){}
  

  ngOnInit(){
    this.getListUsers();
    console.log("------------------------------------")
    console.log("----- List Users inicialized -------")
    console.log("------------------------------------")
  }

  ngOnDestroy(){
    this.subscriptions.forEach(subscription => subscription.unsubscribe()); 
  }

  getListUsers(){
    const subscription = this.listUsersService.getListUsers(2)
    .subscribe((response: any) => {
      this.users = response.data;
    });

    this.subscriptions.push(subscription);
  }

  deleteUser(userId: number){

   const deletedUserName = this.getUserNameById(userId);

   const subscription = this.usersService.deleteUserForIndex(userId)
      .subscribe(() => {
        this.users = this.users.filter(user => user.id !== userId);

        alert('el usuario '+ `${deletedUserName}` + ' fue eliminado correctamente');
      });
      
   this.subscriptions.push(subscription);   

  }

  private getUserNameById(userId: number) : string {
    const user = this.users.find(user => user.id === userId);
    return user ? `${user.first_name} ${user.last_name}` : '';
  }

}
