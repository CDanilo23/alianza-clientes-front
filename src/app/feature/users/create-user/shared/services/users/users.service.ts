import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}`)
  }

  createUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }

  deleteUserForIndex(index: number) {
     return this.http.delete(`${this.apiUrl}/${index}`);
  }
}
