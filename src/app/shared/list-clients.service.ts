import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListClientService{
    private apiUrl = 'http://localhost:8000/client';

    constructor(private http: HttpClient){

    }

    getClients(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
      
    createClient(clientData: any): Observable<any> {
        return this.http.post(this.apiUrl, clientData);
    
    }  

}