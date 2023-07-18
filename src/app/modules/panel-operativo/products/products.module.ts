import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsRoutes } from './products.routing';
import { RecipesComponent } from './products-form/recipes/recipes.component';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ProductsFormComponent,
    ViewComponent,
    RecipesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutes
  ]
})
export class ProductsModule { }
