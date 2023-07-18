import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengImportModule } from '../primeng-import/primeng-import.module';
import { LoadingComponent } from './loading/loading.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from './dialog-error/dialog-error.component';
import { DirectivesModule } from '../directives/directives.module';
import { ViewErrorComponent } from './view-error/view-error.component';
// import { FieldsFormModule } from '../fields-form/fields-form.module';



@NgModule({
  declarations: [
    LoadingComponent,
    DialogConfirmComponent,
    DialogErrorComponent,
    ViewErrorComponent
  ],
  imports: [
    PrimengImportModule,
    CommonModule,
    DirectivesModule
  ],
  exports: [
    LoadingComponent,
    DialogConfirmComponent,
    DialogErrorComponent,
    ViewErrorComponent
  ]
})
export class DialogsModule { }
