import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RawMaterialsComponent } from './view/raw-materials.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'raw-materials',
    pathMatch:'full'
   },{
    path:'',
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
