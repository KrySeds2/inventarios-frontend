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
        loadChildren: () => import('./warehouses/warehouses.module').then( mod => mod.WarehousesModule)
      },
      {
        path: 'receptions',
        loadChildren: () => import('./receptions/receptions.module').then( mod => mod.ReceptionsModule)
      },
      {
        path: 'raw-materials',
        loadChildren: () => import('./raw-materials/raw-materials.module').then( mod => mod.RawMaterialsModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('./inventory/inventory.module').then( mod => mod.InventoryModule)
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
