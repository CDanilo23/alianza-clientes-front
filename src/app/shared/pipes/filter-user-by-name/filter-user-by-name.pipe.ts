import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserByName',
})
export class FilterUserByNamePipe implements PipeTransform {

  transform(users: any[], searchTerm: string): any[] {
   if(!users || !searchTerm){
    return users;
   }

   return users.filter(user =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
