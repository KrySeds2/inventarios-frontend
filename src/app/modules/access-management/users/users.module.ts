import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { UsersRoutes } from './users.routing';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { FormComponent } from './components/form/form.component';
import { ViewComponent } from './components/view/view.component';



@NgModule({
  declarations: [
    ViewComponent,
    EditComponent,
    AddComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutes
  ]
})
export class UsersModule { }
