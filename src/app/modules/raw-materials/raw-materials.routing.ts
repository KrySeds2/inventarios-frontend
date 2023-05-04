import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RawMaterialsComponent } from './view/raw-materials.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'view',
    pathMatch:'full'
   },{
    path:'view',
    component:RawMaterialsComponent
   },{
    path:'add',
    component:AddComponent
   },{
    path:'edit/:id',
    component:EditComponent
   }
];

export const RawMaterialsRoutes = RouterModule.forChild(routes);
