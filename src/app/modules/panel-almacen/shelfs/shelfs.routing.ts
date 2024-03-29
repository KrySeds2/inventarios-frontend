import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShelfsComponent } from './view/shelfs.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'shelfs',
    pathMatch:'full'
   },{
    path:'',
    component:ShelfsComponent
   },{
    path:'add',
    component:AddComponent
   },{
    path:'edit/:id',
    component:EditComponent
   }
];

export const ShelfsRoutes = RouterModule.forChild(routes);
