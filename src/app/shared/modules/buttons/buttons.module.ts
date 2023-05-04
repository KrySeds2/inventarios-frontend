import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { ButtonContinueComponent } from './button-continue/button-continue.component';
import { ButtonRegisterComponent } from './button-register/button-register.component';
import { ButtonConfirmComponent } from './button-confirm/button-confirm.component';
import {ButtonModule} from 'primeng/button';
import { PrimengImportModule } from '../primeng-import/primeng-import.module';


@NgModule({
  declarations: [
    CustomButtonComponent,
    ButtonContinueComponent,
    ButtonRegisterComponent,
    ButtonConfirmComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PrimengImportModule
  ],
  exports: [
    CustomButtonComponent,
    ButtonContinueComponent,
    ButtonRegisterComponent,
    ButtonConfirmComponent
  ]
})
export class ButtonsModule { }
