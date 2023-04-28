import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    InputSwitchModule,
    FormsModule,
    InputTextModule
  ], exports: [
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    ButtonModule,
    TableModule,
    InputSwitchModule,
    FormsModule,
    InputTextModule
  ]
})
export class SharedModule { }
