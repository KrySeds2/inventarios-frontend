import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehousesComponent } from './warehouses/view/warehouses.component';
import { ReceptionsComponent } from './receptions/view/receptions.component';
import { RawMaterialsComponent } from './raw-materials/view/raw-materials.component';
import { InventoryComponent } from './inventory/view/inventory.component';
import { LoginComponent } from './login/view/login.component';
import { SidenavComponent } from '../shared/components/sidenav/sidenav.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent // Cambia aquí el componente principal
  },
  {
    path:'sidenav',
    component:SidenavComponent,
    children:[
      {
        path: 'warehouses',
        component: WarehousesComponent
      },
      {
        path: 'receptions',
        component: ReceptionsComponent
      },
      {
        path: 'raw-materials',
        component: RawMaterialsComponent
      },
      {
        path: 'inventory',
        component: InventoryComponent
      },
      {
        path:'**',
        redirectTo: 'warehouses'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
