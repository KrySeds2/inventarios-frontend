import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { InventoryComponent } from './view/inventory.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'view',
    pathMatch:'full'
   },{
    path:'view',
    component:InventoryComponent
   },{
    path:'add',
    component:AddComponent,
   },{
    path:'edit/:id',
    component:EditComponent,
   }
];

export const InventoryRoutes = RouterModule.forChild(routes);
