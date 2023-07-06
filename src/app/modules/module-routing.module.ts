import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { WarehousesComponent } from './panel-almacen/warehouses/view/warehouses.component';
// import { ReceptionsComponent } from './panel-almacen/receptions/view/receptions.component';
// import { RawMaterialsComponent } from './panel-almacen/raw-materials/view/raw-materials.component';
// import { InventoryComponent } from './panel-almacen/inventory/view/inventory.component';
import { LoginComponent } from './login/view/login.component';
import { SidenavComponent } from '../shared/components/sidenav/sidenav.component';
import { MainLayoutComponent } from '@shared/components/main-layout/main-layout.component';

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
        data:{module:'warehouses', breadcrumb:'almacenes'},
        loadChildren: () =>
        import('./panel-almacen/warehouses/warehouses.module').then( mod => mod.WarehousesModule)
      },
      {
        path: 'storage-panel/receptions',
        data:{module:'receptions', breadcrumb:'recepciones'},
        loadChildren: () =>
        import('./panel-almacen/receptions/receptions.module').then( mod => mod.ReceptionsModule)
      },
      {
        path: 'storage-panel/raw-materials',
        data:{module:'raw-materials', breadcrumb:'materias primas'},
        loadChildren: () =>
        import('./panel-almacen/raw-materials/raw-materials.module').then( mod => mod.RawMaterialsModule)
      },
      {
        path: 'storage-panel/inventory',
        data:{module:'inventory', breadcrumb:'inventario'},
        loadChildren: () =>
        import('./panel-almacen/inventory/inventory.module').then( mod => mod.InventoryModule)
      },
      {
        path: 'operating-panel/orders',
        data:{module:'orders', breadcrumb:'pedidos'},
        loadChildren: () =>
        import('./panel-operativo/orders/orders.module').then( mod => mod.OrdersModule)
      },
      {
        path: 'operating-panel/product-lot',
        data:{module:'product-lot', breadcrumb:'lotes de productos'},
        loadChildren: () =>
        import('./panel-operativo/product-lot/product-lot.module').then( mod => mod.ProductLotModule)
      },
      {
        path: 'operating-panel/product-manufacturing',
        data:{module:'product-manufacturing', breadcrumb:'fabricacion de producto'},
        loadChildren: () =>
        import('./panel-operativo/product-manufacturing/product-manufacturing.module').then( mod => mod.ProductManufacturingModule)
      },
      {
        path: 'operating-panel/products',
        data:{module:'products', breadcrumb:'productos'},
        loadChildren: () =>
        import('./panel-operativo/products/products.module').then( mod => mod.ProductsModule)
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
