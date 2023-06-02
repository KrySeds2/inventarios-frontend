import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleRoutingModule } from './module-routing.module';
import { WarehousesModule } from './panel-almacen/warehouses/warehouses.module';
import { ReceptionsModule } from './panel-almacen/receptions/receptions.module';
import { LoginModule } from './login/login.module';
import { RawMaterialsModule } from './panel-almacen/raw-materials/raw-materials.module';
import { InventoryModule } from './panel-almacen/inventory/inventory.module';
import { ShelfsModule } from './panel-almacen/shelfs/shelfs.module';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    SharedModule,
    WarehousesModule,
    ReceptionsModule,
    LoginModule,
    RawMaterialsModule,
    InventoryModule,
    ShelfsModule

  ]
})
export class ModulesModule { }
