import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { WarehousesComponent } from './view/warehouses.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'view',
    pathMatch:'full'
  },{
    path:'view',
    component:WarehousesComponent
  },{
    path:'add',
    component:AddComponent
  },{
    path:'edit/:id',
    component:EditComponent
  }
];

export const WarehousesRoutes = RouterModule.forChild(routes);
