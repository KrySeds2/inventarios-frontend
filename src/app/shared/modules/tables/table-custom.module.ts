import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';
import { TableResumeComponent } from './components/table-resume/table-resume.component';
import { DirectivesModule } from '../directives/directives.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PrimengImportModule } from '../primeng-import/primeng-import.module';
import { TAssignComponent } from './utils/t-assign/t-assign.component';
import { TDeleteComponent } from './utils/t-delete/t-delete.component';
import { TDetailsComponent } from './utils/t-details/t-details.component';
import { TDownloadComponent } from './utils/t-download/t-download.component';
import { TEditComponent } from './utils/t-edit/t-edit.component';
import { TIconComponent } from './utils/t-icon/t-icon.component';
import { TImageComponent } from './utils/t-image/t-image.component';
import { TOrderStatusComponent } from './utils/t-order-status/t-order-status.component';
import { TSetUpComponent } from './utils/t-set-up/t-set-up.component';
import { TStateComponent } from './utils/t-state/t-state.component';
import { TStatusComponent } from './utils/t-status/t-status.component';
import { TViewComponent } from './utils/t-view/t-view.component';
import { TableComponent } from './tables.component';
@NgModule({
  declarations: [
    TableResumeComponent,
    TableLayoutComponent,
    TAssignComponent,
    TDeleteComponent,
    TDetailsComponent,
    TDownloadComponent,
    TEditComponent,
    TIconComponent,
    TImageComponent,
    TOrderStatusComponent,
    TSetUpComponent,
    TStateComponent,
    TStatusComponent,
    TViewComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule,
    FormsModule,
    PrimengImportModule
  ],
  exports: [
    TableResumeComponent,
    TableLayoutComponent,
    TAssignComponent,
    TDeleteComponent,
    TDetailsComponent,
    TDownloadComponent,
    TEditComponent,
    TIconComponent,
    TImageComponent,
    TOrderStatusComponent,
    TSetUpComponent,
    TStateComponent,
    TStatusComponent,
    TViewComponent,
    TableComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TableCustomModule { }
