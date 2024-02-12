import { NgModule } from '@angular/core';
import { ListClientComponent } from './list-clients/list-clients.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { CommonModule } from '@angular/common';
import { ListClientService } from '@shared/list-clients.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterClientBySharedKeyPipe } from '../../shared/pipes/filter-user-by-name/filter-client-by-sharedkey.pipe';


@NgModule({
    declarations:[
     ListClientComponent,
     HomeClientComponent,
     //Se declara el pipe
     FilterClientBySharedKeyPipe
    ],
    imports:[
     CommonModule ,
     ClientsRoutingModule, 
     ReactiveFormsModule,
     FormsModule
    ],
    providers: [ListClientService]

})
export class ClientsModule {
}
