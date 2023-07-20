import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { PrimengImportModule } from '../primeng-import/primeng-import.module';
import { InputColorComponent } from './input-color/input-color.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownComponent } from './dropdown/dropdown.component';
import { InputCalendarComponent } from './input-calendar/input-calendar.component';
import { InputTextAreaComponent } from './input-text-area/input-text-area.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { InputImageComponent } from './input-image/input-image.component';



@NgModule({
  declarations: [
    InputComponent,
    InputColorComponent,
    DropdownComponent,
    InputCalendarComponent,
    InputTextAreaComponent,
    InputCheckboxComponent,
    InputImageComponent
  ],
  imports: [
    CommonModule,
    PrimengImportModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    InputComponent,
    InputColorComponent,
    DropdownComponent,
    InputCalendarComponent,
    InputTextAreaComponent,
    InputCheckboxComponent,
    InputImageComponent
  ]
})
export class FieldsFormModule { }
