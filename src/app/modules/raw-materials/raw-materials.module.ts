import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RawMaterialsComponent } from './view/raw-materials.component';
import { ModuleRoutingModule } from '../module-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RawMaterialsFormComponent } from './raw-materials-form/raw-materials-form.component';
import { RawMaterialsRoutes } from './raw-materials.routing';



@NgModule({
  declarations: [
    RawMaterialsComponent,
    AddComponent,
    EditComponent,
    RawMaterialsFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // ModuleRoutingModule,
    RawMaterialsRoutes
  ]
})
export class RawMaterialsModule { }
