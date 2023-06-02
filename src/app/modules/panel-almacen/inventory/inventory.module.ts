import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';
import { InventoryComponent } from './view/inventory.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModuleRoutingModule } from '../../module-routing.module';
import { InventoryRoutes } from './inventory.routing';
@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    InventoryFormComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // ModuleRoutingModule,
    InventoryRoutes
  ]
})
export class InventoryModule { }
