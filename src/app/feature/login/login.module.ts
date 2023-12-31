import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        LoginComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: 
    [LoginRoutingModule]
})
export class LoginModule {
}
