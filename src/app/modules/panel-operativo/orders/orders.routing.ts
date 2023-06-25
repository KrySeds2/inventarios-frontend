import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'orders',
    pathMatch:'full'
   },{
    path:'',
    component:ViewComponent,
   },{
    path:'add',
    component:AddComponent,
   },{
    path:'edit/:id',
    component:EditComponent,
   },
];

export const OrdersRoutes = RouterModule.forChild(routes);
