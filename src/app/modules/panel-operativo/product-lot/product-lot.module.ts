import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ProductLotFormComponent } from './product-lot-form/product-lot-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductLotRoutes } from './product-lot.routing';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ViewComponent,
    ProductLotFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductLotRoutes
  ]
})
export class ProductLotModule { }
