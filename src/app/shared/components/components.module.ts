import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContainerComponent } from './main-container/main-container.component';
import { TitleComponent } from './title/title.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PrimengImportModule } from '../modules/primeng-import/primeng-import.module';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { TranslateModule } from '@ngx-translate/core';
import { DialogsModule } from '../modules/dialogs/dialogs.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
@NgModule({
  declarations: [
    MainContainerComponent,
    TitleComponent,
    SidenavComponent,
    BreadcrumbsComponent,
    MainLayoutComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    PrimengImportModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    TranslateModule,
    DialogsModule
  ],
  exports:[
    MainContainerComponent,
    TitleComponent,
    SidenavComponent,
    BreadcrumbsComponent,
    MainLayoutComponent,
    ChangePasswordComponent
  ]
})
export class ComponentsModule { }
