import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotConnectionComponent } from '@core/components/not-connection/not-connection.component';
import { NotFoundPageComponent } from '@core/components/not-found-page/not-found-page.component';
import { DefaultPageComponent } from '@core/components/default-page/default-page.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
function initializeAppFactory(httpClient: HttpClient): () => Observable<any> {
  return () => httpClient.get<any>('../assets/env.json').pipe(
    map(
      (values: any) => {
        if (environment.production) {
          environment.apiUrl = values.apiUrl;
          environment.apiLogin = values.apiLogin;
        }
        return true;
      }
    )
  );
}
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    NotFoundPageComponent,
    NotConnectionComponent,
    DefaultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory:(createTranslateLoader),
        deps:[HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [HttpClient],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
