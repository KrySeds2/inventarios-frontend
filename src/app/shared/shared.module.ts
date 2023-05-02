import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { TableCustomModule } from './modules/tables/table-custom.module';
import { DirectivesModule } from './modules/directives/directives.module';
import { PrimengImportModule } from './modules/primeng-import/primeng-import.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    PrimengImportModule

  ], exports: [
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    TableCustomModule,
    DirectivesModule,
    PrimengImportModule
  ]
})
export class SharedModule { }
