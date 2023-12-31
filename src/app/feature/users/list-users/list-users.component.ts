import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListUsersService } from '@shared/list-users.service';


@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  users: any[] = [];
  searchTerm: string = '';

  constructor(private listUsersService : ListUsersService,
    private httpClient: HttpClient ){}
  

  ngOnInit(){
    this.getListUsers();
    console.log("****************")
    console.log("*****List Users inicialized***********")
    console.log("****************")
  }

  getListUsers(){
    this.listUsersService.getListUsers(2)
    .subscribe((response: any) => {
      this.users = response.data;
    });
  }

  deleteUser(userId: number){

    const deletedUserName = this.getUserNameById(userId);

    this.listUsersService.deleteUser(userId)
      .subscribe(() => {
        this.users = this.users.filter(user => user.id !== userId);

        alert('el usuario '+ `${deletedUserName}` + ' fue eliminado correctamente');
      })
  }

  private getUserNameById(userId: number) : string {
    const user = this.users.find(user => user.id === userId);
    return user ? `${user.first_name} ${user.last_name}` : '';
  }

}
