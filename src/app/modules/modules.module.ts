import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleRoutingModule } from './module-routing.module';
import { WarehousesModule } from './panel-almacen/warehouses/warehouses.module';
import { ReceptionsModule } from './panel-almacen/receptions/receptions.module';

import { RawMaterialsModule } from './panel-almacen/raw-materials/raw-materials.module';
import { InventoryModule } from './panel-almacen/inventory/inventory.module';
import { ShelfsModule } from './panel-almacen/shelfs/shelfs.module';
import { SharedModule } from 'primeng/api';
import { OrdersModule } from './panel-operativo/orders/orders.module';
import { ProductLotModule } from './panel-operativo/product-lot/product-lot.module';
import { ProductManufacturingModule } from './panel-operativo/product-manufacturing/product-manufacturing.module';
import { ProductsModule } from './panel-operativo/products/products.module';
import { RawMaterialsUsedModule } from './panel-operativo/raw-materials-used/raw-materials-used.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    SharedModule,
    WarehousesModule,
    ReceptionsModule,
    RawMaterialsModule,
    InventoryModule,
    ShelfsModule,
    OrdersModule,
    ProductLotModule,
    ProductManufacturingModule,
    ProductsModule,
    RawMaterialsUsedModule
  ]
})
export class ModulesModule { }
