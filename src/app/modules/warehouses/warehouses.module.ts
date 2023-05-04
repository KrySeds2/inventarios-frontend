import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { WarehousesComponent } from './view/warehouses.component';
import { ModuleRoutingModule } from '../module-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { WarehousesFormComponent } from './warehouses-form/warehouses-form.component';



@NgModule({
  declarations: [
    WarehousesComponent,
    AddComponent,
    EditComponent,
    WarehousesFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModuleRoutingModule,

  ]
})
export class WarehousesModule { }
