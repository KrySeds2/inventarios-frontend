import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RawMaterialsUsedRoutes } from './raw-materials-used.routing';
import { RawMaterialsUsedComponent } from './raw-materials-used.component';



@NgModule({
  declarations: [
    RawMaterialsUsedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RawMaterialsUsedRoutes
  ]
})
export class RawMaterialsUsedModule { }
