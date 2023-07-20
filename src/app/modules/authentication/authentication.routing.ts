import { Routes, RouterModule } from '@angular/router';
import { LoadingInfoComponent } from './components/loading-info/loading-info.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverComponent } from './components/recover/recover.component';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [],
    component: LoginComponent
  },
  {
    path: 'LoadingInfo',
    component: LoadingInfoComponent
  },
  {
    path: 'recover',
    component: RecoverComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

export const AuthenticationRoutes = RouterModule.forChild(routes);
