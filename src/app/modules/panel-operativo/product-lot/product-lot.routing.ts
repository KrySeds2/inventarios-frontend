import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'product-lot',
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

export const ProductLotRoutes = RouterModule.forChild(routes);
