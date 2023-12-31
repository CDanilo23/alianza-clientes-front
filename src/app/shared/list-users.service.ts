import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListUsersService{
    private apiUrl = 'https://reqres.in/api/users';

    constructor(private http: HttpClient){

    }

    getListUsers(page: number = 1 ): Observable<any> {
        return this.http.get(`${this.apiUrl}?page=${page}`);
    }

    deleteUser(userId: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${userId}`);
    }
}