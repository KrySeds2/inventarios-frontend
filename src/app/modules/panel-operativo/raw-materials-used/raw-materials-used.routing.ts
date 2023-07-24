import { Routes, RouterModule } from '@angular/router';
import { RawMaterialsUsedComponent } from './raw-materials-used.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'raw-materials-used',
    pathMatch:'full'
   },{
    path:'',
    component:RawMaterialsUsedComponent,
   }
];

export const RawMaterialsUsedRoutes = RouterModule.forChild(routes);
