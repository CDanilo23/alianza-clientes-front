import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterClientBySharedKey',
})
export class FilterClientBySharedKeyPipe implements PipeTransform {

  transform(clients: any[], searchTerm: string): any[] {
   if(!clients || !searchTerm){
    return clients;
   }

   return clients.filter(client =>
    client.sharedKey.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
