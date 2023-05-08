import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
const hermes = require("src/assets/hermes");
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  idsetTimeout;
  constructor(
    private http: HttpClient,
    private authSv: AuthService,
    private router: Router,
  ) {
  }
  restart() {
    clearTimeout(this.idsetTimeout);
    this.idsetTimeout = setTimeout(() => {
      clearTimeout(this.idsetTimeout);
    }, 600000);
  }
  /**
 * Example
 * @param url : /example/example2
 */
  get<T>(url) {
    return this.http.get<T>(environment.apiUrl + url, this.authSv.getOptions()).pipe(
      catchError(this.handleError.bind(this)),
      map(
        (response: HttpResponse<T> | any) => {
          this.restart();
          return response.body;
        }
      )
    );
  }
  post<T>(url, body) {
    console.log(environment.apiUrl + url);
    return this.http.post<T>(environment.apiUrl + url, body, this.authSv.getOptions()).pipe(
      catchError(this.handleError.bind(this)),
      map(
        (data: HttpResponse<T> | any) => {
          this.restart();
          return data.body;
        }
      )
    );
  }
  put<T>(url, body) {
    return this.http.put<T>(environment.apiUrl + url, body, this.authSv.getOptions()).pipe(
      catchError(this.handleError.bind(this)),
      map(
        (data: HttpResponse<T> | any) => {
          this.restart();
          return data.body;
        }
      )
    );
  }
  custom<T>(url) {
    return this.http.get<T>(url).pipe(
      catchError(this.handleError.bind(this)),
      map(
        (response: HttpResponse<T> | any) => {
          this.restart();
          return response;
          console.log('response', response);
          // this.refreshToken(response);
          // console.log('HTTPSERVICE-GET',response.body);
          return response.body;
        }
      )
    );
  }
  patch<T>(url, body) {
    return this.http.patch<T>(environment.apiUrl + url, body, this.authSv.getOptions()).pipe(
      catchError(this.handleError.bind(this)),
      map(
        (data: HttpResponse<T> | any) => {
          this.restart();
          return data.body.data;
        }
      )
    );
  }
  delete<T>(url) {
    return this.http.delete<T>(environment.apiUrl + url, this.authSv.getOptions()).pipe(
      catchError(this.handleError.bind(this)),
      map(
        (data: HttpResponse<T> | any) => {
          this.restart();
          return data.body;
        }
      )
    );
  }
  refreshToken(response) {
    console.log(response.headers?.keys());
    console.log(' refresh-token', response.headers.get('refresh-token'));
  }
  private handleError(error: HttpErrorResponse) {
    //console.log(error);
    if (error.status == 401 || error.status == 403) {
      alert('Sesión expirada ó sin autorización');
      this.authSv.logout();
      console.log("send close");
      hermes.send('reload-session', 1);
      this.router.navigateByUrl('/login');
    }
    //Sentry.captureException(error);
    return throwError(error);
  }
}
