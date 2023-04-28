import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../shared/components/sidenav/sidenav.component';
import { TitleComponent } from '../shared/components/title/title.component';
import { ModuleRoutingModule } from './module-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { LoginComponent } from './login/login.component';
import { ReceptionsComponent } from './receptions/receptions.component';
import { RawMaterialsComponent } from './raw-materials/raw-materials.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { TableComponent } from '../shared/components/table/table.component';

@NgModule({
  declarations: [
    SidenavComponent,
    TitleComponent,
    ToolbarComponent,
    TableComponent,
    WarehousesComponent,
    LoginComponent,
    ReceptionsComponent,
    RawMaterialsComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    SharedModule
  ]
})
export class ModulesModule { }
