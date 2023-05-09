import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from './components/dialog-error/dialog-error.component';
import { DialogLimitComponent } from './components/dialog-limit/dialog-limit.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PrimengImportModule } from '../primeng-import/primeng-import.module';
import { TranslateModule } from '@ngx-translate/core';
import { ViewErrorComponent } from './utils/view-error/view-error.component';
import { ConfirmComponent } from './utils/confirm/confirm.component';



@NgModule({
  declarations: [
    DialogConfirmComponent,
    DialogErrorComponent,
    DialogLimitComponent,
    LoadingComponent,
    ViewErrorComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    PrimengImportModule,
    TranslateModule,
  ],
  exports:[
    DialogConfirmComponent,
    DialogErrorComponent,
    DialogLimitComponent,
    LoadingComponent,
    ViewErrorComponent,
    ConfirmComponent
  ]
})
export class DialogsModule { }
