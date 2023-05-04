import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'view',
    pathMatch:'full'
    },{
      path:'view',
      component: LoginComponent
    }
];

export const LoginRoutes = RouterModule.forChild(routes);
