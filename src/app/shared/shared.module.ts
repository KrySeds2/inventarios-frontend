import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// Modulos
import { TableCustomModule } from './modules/tables/table-custom.module';
import { DirectivesModule } from './modules/directives/directives.module';
import { PrimengImportModule } from './modules/primeng-import/primeng-import.module';
import { ButtonsModule } from './modules/buttons/buttons.module';
import { ComponentsModule } from './components/components.module';
import { DialogsModule } from './modules/dialogs/dialogs.module';
import { FieldsFormModule } from './modules/fields-form/fields-form.module';

@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    PrimengImportModule,
    ButtonsModule,
    ComponentsModule,
    ReactiveFormsModule,
    DialogsModule,
    FieldsFormModule
  ], exports: [
    FormsModule,
    TableCustomModule,
    DirectivesModule,
    PrimengImportModule,
    ButtonsModule,
    ComponentsModule,
    ReactiveFormsModule,
    DialogsModule,
    FieldsFormModule

  ]
})
export class SharedModule { }
