import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReceptionsComponent } from './view/receptions.component';
import { ModuleRoutingModule } from '../module-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReceptionsFormComponent } from './receptions-form/receptions-form.component';



@NgModule({
  declarations: [
    ReceptionsComponent,
    AddComponent,
    EditComponent,
    ReceptionsFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModuleRoutingModule,

  ]
})
export class ReceptionsModule { }
