import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ProductLotFormComponent } from './product-lot-form/product-lot-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductLotRoutes } from './product-lot.routing';
import { RecipesComponent } from './product-lot-form/recipes/recipes.component';
import { RawMaterialsUsedComponent } from './raw-materials-used/raw-materials-used.component';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ViewComponent,
    ProductLotFormComponent,
    RecipesComponent,
    RawMaterialsUsedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductLotRoutes
  ]
})
export class ProductLotModule { }
