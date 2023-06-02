import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { WarehousesComponent } from './panel-almacen/warehouses/view/warehouses.component';
// import { ReceptionsComponent } from './panel-almacen/receptions/view/receptions.component';
// import { RawMaterialsComponent } from './panel-almacen/raw-materials/view/raw-materials.component';
// import { InventoryComponent } from './panel-almacen/inventory/view/inventory.component';
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
        loadChildren: () => import('./panel-almacen/warehouses/warehouses.module').then( mod => mod.WarehousesModule)
      },
      {
        path: 'receptions',
        loadChildren: () => import('./panel-almacen/receptions/receptions.module').then( mod => mod.ReceptionsModule)
      },
      {
        path: 'raw-materials',
        loadChildren: () => import('./panel-almacen/raw-materials/raw-materials.module').then( mod => mod.RawMaterialsModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('./panel-almacen/inventory/inventory.module').then( mod => mod.InventoryModule)
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
