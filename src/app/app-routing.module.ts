import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/modules.module').then(m=>m.ModulesModule)
  },
    {
      path:'404',
      component: ErrorPageComponent
    },
    {
      path:'**',
     // component: ErrorPageComponent
      redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
