
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  minLength: number = 8;

  constructor(private loginService: LoginService, private readonly router: Router) {}

  ngOnInit(): void {
    console.log('LoginComponent initialized.');
  }

  login(){
    if(!this.email){
      this.errorMessage = 'Email is required.';
      return;
    }

    if(!this.password){
      this.errorMessage = 'Password is required';
      return;
    }

    if(this.password.length < this.minLength){
      this.errorMessage = `The minimum length of characters should be ${this.minLength}.`;
      return;
    }

    this.loginService.login(this.email, this.password)
    .subscribe(
      (response) => {
        //Almacenar el token en el localStorage
        localStorage.setItem('token', response.token);
        
        //Redirige
        this.router.navigate(['/list-users']); 
      },
      (error) => {
        this.errorMessage = 'Invalid email or password';
      }
    );
  }



  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

}
