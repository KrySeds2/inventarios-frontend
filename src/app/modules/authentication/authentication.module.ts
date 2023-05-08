import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RecoverComponent } from './components/recover/recover.component';



@NgModule({
  declarations: [
    LoginComponent,
    RecoverComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
