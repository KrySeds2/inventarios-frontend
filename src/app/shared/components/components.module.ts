import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContainerComponent } from './main-container/main-container.component';
import { TitleComponent } from './title/title.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PrimengImportModule } from '../modules/primeng-import/primeng-import.module';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    MainContainerComponent,
    TitleComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    PrimengImportModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  exports:[
    MainContainerComponent,
    TitleComponent,
    SidenavComponent,
    ToolbarComponent
  ]
})
export class ComponentsModule { }
