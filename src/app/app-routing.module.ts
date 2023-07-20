import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { NotConnectionComponent } from '@core/components/not-connection/not-connection.component';
import { NotFoundPageComponent } from '@core/components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'modules',
    canActivate:[],
    loadChildren: () => import('./modules/modules.module').then(m=>m.ModulesModule)
  },
    {
      path:'404',
      component: NotConnectionComponent
    },
    {
      path:'**',
     component: NotFoundPageComponent

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  }),
    AuthenticationModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
