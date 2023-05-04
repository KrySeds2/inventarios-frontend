import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { WarehousesComponent } from './view/warehouses.component';
import { ShelfsComponent } from '../shelfs/view/shelfs.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'warehouses',
    pathMatch:'full'
  },{
    path:'',
    component:WarehousesComponent
  },{
    path:'add',
    component:AddComponent
  },{
    path:'edit/:id',
    component:EditComponent
  },{
    path:'shelfs',
    loadChildren: () => import('../shelfs/shelfs.module').then( mod => mod.ShelfsModule)
  }
];

export const WarehousesRoutes = RouterModule.forChild(routes);
