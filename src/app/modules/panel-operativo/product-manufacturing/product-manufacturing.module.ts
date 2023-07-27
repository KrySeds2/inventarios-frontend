import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewComponent } from './view/view.component';
import { ProductManufacturingFormComponent } from './product-manufacturing-form/product-manufacturing-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductManufacturingRoutes } from './product-manufacturing.routing';
import { ManufacturingProductComponent } from './manufacturing-product/manufacturing-product.component';
import { AddPackRawMaterialsComponent } from './add-pack-raw-materials/add-pack-raw-materials.component';
import { RawMaterialsComponent } from './raw-materials/raw-materials.component';




@NgModule({
  declarations: [
    ViewComponent,
    ManufacturingProductComponent,
    ProductManufacturingFormComponent,
    AddPackRawMaterialsComponent,
    RawMaterialsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductManufacturingRoutes
  ]
})
export class ProductManufacturingModule { }
