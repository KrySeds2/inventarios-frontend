import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationRoutes } from './authentication.routing';
import { LoadingInfoComponent } from './components/loading-info/loading-info.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecoverComponent } from './components/recover/recover.component';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    LoginComponent,
    LoadingInfoComponent,
    FooterComponent,
    RecoverComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutes,
    SharedModule,
    PanelModule,
    CardModule
  ]
})
export class AuthenticationModule { }
