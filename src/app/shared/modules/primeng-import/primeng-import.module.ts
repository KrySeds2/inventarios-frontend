import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ColorPickerModule} from 'primeng/colorpicker';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {StepsModule} from 'primeng/steps';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CheckboxModule} from 'primeng/checkbox';
import {TabViewModule} from 'primeng/tabview';
import {InputMaskModule} from 'primeng/inputmask';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    DialogModule,
    ProgressSpinnerModule,
    OverlayPanelModule,
    MenuModule,
    TableModule,
    CardModule,
    ColorPickerModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    StepsModule,
    TabMenuModule,
    InputSwitchModule,
    CheckboxModule,
    TabViewModule,
    InputMaskModule,
    ScrollPanelModule,
    ChartModule
  ]
})
export class PrimengImportModule { }

