import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { ButtonContinueComponent } from './button-continue/button-continue.component';
import { ButtonRegisterComponent } from './button-register/button-register.component';
import { ButtonConfirmComponent } from './button-confirm/button-confirm.component';
import {ButtonModule} from 'primeng/button';
import { PrimengImportModule } from '../primeng-import/primeng-import.module';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { TranslateModule } from '@ngx-translate/core';
import { DialogsModule } from '../dialogs/dialogs.module';
import { DirectivesModule } from '../directives/directives.module';


@NgModule({
  declarations: [
    CustomButtonComponent,
    ButtonContinueComponent,
    ButtonRegisterComponent,
    ButtonConfirmComponent,
    FormButtonsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PrimengImportModule,
    TranslateModule,
    DialogsModule,
    DirectivesModule
  ],
  exports: [
    CustomButtonComponent,
    ButtonContinueComponent,
    ButtonRegisterComponent,
    ButtonConfirmComponent,
    FormButtonsComponent,
  ]
})
export class ButtonsModule { }
