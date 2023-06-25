import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'product-manufacturing',
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

export const ProductManufacturingRoutes = RouterModule.forChild(routes);
