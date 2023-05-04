import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShelfsComponent } from './view/shelfs.component';
import { ModuleRoutingModule } from '../module-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShelfsFormComponent } from './shelfs-form/shelfs-form.component';
import { ShelfsRoutes } from './shelfs.routing';



@NgModule({
  declarations: [
    ShelfsComponent,
    AddComponent,
    EditComponent,
    ShelfsFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // ModuleRoutingModule,
    ShelfsRoutes

  ]
})
export class ShelfsModule { }
