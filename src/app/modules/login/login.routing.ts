import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
    },{
      path:'login',
      component: LoginComponent
    }
];

export const LoginRoutes = RouterModule.forChild(routes);
