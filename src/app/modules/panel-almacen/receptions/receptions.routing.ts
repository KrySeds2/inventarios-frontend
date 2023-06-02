import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReceptionsComponent } from './view/receptions.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'receptions',
    pathMatch:'full'
   },{
    path:'',
    component:ReceptionsComponent
   },{
    path:'add',
    component:AddComponent
   },{
    path:'edit/:id',
    component:EditComponent
   }
];

export const ReceptionsRoutes = RouterModule.forChild(routes);
