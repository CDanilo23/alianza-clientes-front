import { Component, OnInit, ViewChild } from '@angular/core';
import { ListClientService } from '@shared/list-clients.service';
import { Client } from './client';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss'],
})
export class ListClientComponent implements OnInit {

  clients: Client[] = [];

  showModal: boolean = false;
  
  searchTerm: string = '';

  clientData = {};

  @ViewChild('clientForm') clientForm!: NgForm;
  
  constructor(private listClientService : ListClientService,
    private readonly router: Router){}
  

  ngOnInit(){
    this.getListUsers();
  }


  getListUsers(){
    this.listClientService.getClients()
    .subscribe( 
      (response: any) => {
  
        this.clients = response;
      
      },
    );
   
  }

  newClient() {
    this.showModal = true;
  }

  closePopup() {
    this.showModal = false;
  }

  guardarCliente(){
  
    this.listClientService.createClient(this.clientData).subscribe((response: any) => {
      const createdClientName = response.name;
      alert(`Cliente ${createdClientName} creado correctamente`);
      this.getListUsers();
      this.closePopup();
      this.clientForm.reset();
      this.clientData = {};
      //redirige a '/clients/list'
      this.router.navigate(['/clients/list']);
    });

  }

  exportToCsv() {

    const csvData = this.clients.map(client => Object.values(client).join(',')).join('\n');

    const link = document.createElement('a');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvData));
    link.setAttribute('download', 'clientes.csv');
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }

}
