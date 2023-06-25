import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ProductManufacturingFormComponent } from './product-manufacturing-form/product-manufacturing-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductManufacturingRoutes } from './product-manufacturing.routing';




@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ViewComponent,
    ProductManufacturingFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductManufacturingRoutes
  ]
})
export class ProductManufacturingModule { }
