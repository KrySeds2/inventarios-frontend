import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from './login.model';
import { UserResponseModel } from './response/auth.response';
// import { SetupFunctionService } from 'src/app/modules/setup/services/setup-function.service';
import * as jwt_decode from 'jwt-decode';
import { EncrDecrServiceService } from './encr-decr-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = `${environment.apiUrl}/auth/login`;
  userToken: string;
  public userProfile;

  constructor(
    private http: HttpClient,
    private crypto: EncrDecrServiceService,
  ) {
    this.getUserToken();
  }

  /**
   * Method for remove token from local storage
   * @returns {void}
   */
  public logout() {
    this.http.patch(environment.apiUrl+'/users/user-logged-out/', {}, this.getOptions()).subscribe(
      () => {

      }
    );
    localStorage.removeItem('token');
    localStorage.removeItem('access');
  }

  public login(request: Login): Observable<any> {
    return this.http.post(this.url, request, { observe: 'response' }).pipe(
      map(
        (resp) => {
          this.saveUserToken(resp.body['access_token']);
          // this.saveUserInfo(resp.body['user']);
          //  await this.saveAccessInfo(resp.body['user']);
          return resp.body;
        },
      ));
  }
  /**
   * Almacena el token en el localStorage
   * @param idToken: token del usuario
   */
  saveUserToken(idToken: string) {
    localStorage.setItem('token', idToken);
  }

  // saveAccessInfo(userModel: UserResponseModel){
  //   this.usersService.getCompany().subscribe(
  //     (response:any)=>{
  //       console.log(response);
  //     }
  //   )


  // }

  /**
   * Almacena la información del usuario en el localStorage
   * @param idToken: token del usuario
   */
  saveUserInfo(userModel: UserResponseModel) {
    let crypData = this.crypto.set(environment.cryptoLocal, JSON.stringify(userModel));
    localStorage.setItem('userInfo', crypData)
    // this.setupFunctionService.setLocalStorageItem('userInfo',JSON.stringify(userModel))
  }

  /**
   * Obtiene el token del usuario almacenado en el localstorage
   * @returns retorna el token del usuario
   */
  private getUserToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    //console.log(this.userToken);
    return this.userToken;
  }
  /**
   * Method to generate the headers
   * @returns Returns the headers that will be sent in the request
   */
  public getOptions(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.getUserToken(),
        'Access-Control-Allow-Origin': '*',
      }),
      observe: 'response'
    };
    return httpOptions;
  }

  recover(username: string) {
    return this.http.post(`${environment.apiUrl}/auth/recover`, { username: username })
  }
  recoverValidator(username: string, code: string) {
    return this.http.post(`${environment.apiUrl}/auth/recover/validator`, { username: username, code: code })
  }

  public isAuthenticated(): boolean {
    if (this.getUserToken().length < 2) {
      return false;
    }
    if (this.getTokenExpirationDate(this.getUserToken()) <= new Date()) {
      return false;
    } else {
      return true;
    }

  }

  private getTokenExpirationDate(token: string): Date {

    const DECODED = jwt_decode(token);
    //console.log('DECODED', DECODED);

    if (DECODED.exp === undefined) {
      return null;
    }

    const DATE = new Date(0);

    DATE.setUTCSeconds(DECODED.exp);

    return DATE;
  }

}
