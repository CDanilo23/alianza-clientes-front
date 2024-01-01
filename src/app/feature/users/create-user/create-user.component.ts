import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserValidationService } from './shared/services/users/create-user-validation.service';
import { UsersService } from './shared/services/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {

  createUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private validationService: CreateUserValidationService,
    private usersService: UsersService
  ) {
    this.createUserForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    console.log("//////////////////////////////")
    console.log("///Create user initialized///")
    console.log("/////////////////////////////")
  }

get name(){
  return this.createUserForm.get('name');
}

get job(){
  return this.createUserForm.get('job');
}

createUser(){
  //valida formulario
  if(this.createUserForm.invalid){
    this.validationService.validateAllFormFields(this.createUserForm);
    return;
  }

  const userData = this.createUserForm.value;
  this.usersService.createUser(userData)
  .subscribe((response: any) => {
    const createdUserName = response.name;
    alert(`Usuario ${createdUserName} creado correctamente`);
    //redirige a '/users/list'
    this.router.navigate(['/users/list']);
  });

}

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
