import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { OrdersFormComponent } from './orders-form/orders-form.component';
import { ViewComponent } from './view/view.component';
import { OrdersRoutes } from './orders.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    OrdersFormComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutes,
    SharedModule
  ]
})
export class OrdersModule { }
