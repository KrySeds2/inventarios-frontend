import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { InventoryComponent } from './view/inventory.component';
import { SidenavComponent } from 'src/app/shared/components/sidenav/sidenav.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'inventory',
    pathMatch:'full'
   },{
    path:'',
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
