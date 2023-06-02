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
    path:'panel',
    component:SidenavComponent,
    children:[
      {
        path: 'storage-panel/warehouses',
        loadChildren: () => import('./panel-almacen/warehouses/warehouses.module').then( mod => mod.WarehousesModule)
      },
      {
        path: 'storage-panel/receptions',
        loadChildren: () => import('./panel-almacen/receptions/receptions.module').then( mod => mod.ReceptionsModule)
      },
      {
        path: 'storage-panel/raw-materials',
        loadChildren: () => import('./panel-almacen/raw-materials/raw-materials.module').then( mod => mod.RawMaterialsModule)
      },
      {
        path: 'storage-panel/inventory',
        loadChildren: () => import('./panel-almacen/inventory/inventory.module').then( mod => mod.InventoryModule)
      },
      {
        path: 'operating-panel/orders',
        loadChildren: () => import('./panel-operativo/orders/orders.module').then( mod => mod.OrdersModule)
      },
      {
        path: 'operating-panel/product-lot',
        loadChildren: () => import('./panel-operativo/product-lot/product-lot.module').then( mod => mod.ProductLotModule)
      },
      {
        path: 'operating-panel/product-manufacturing',
        loadChildren: () => import('./panel-operativo/product-manufacturing/product-manufacturing.module').then( mod => mod.ProductManufacturingModule)
      },
      {
        path: 'operating-panel/products',
        loadChildren: () => import('./panel-operativo/products/products.module').then( mod => mod.ProductsModule)
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
