
import { Injectable } from '@angular/core';
import { EncrDecrServiceService } from './encr-decr-service.service';
import { environment } from 'src/environments/environment';
import { UserResponseModel } from './response/auth.response';

import { UserResponse } from 'src/app/shared/services/users/responses/userResponse';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class JwtService {

  /**
   * Creates an instance of JwtService.
   * @memberof JwtService
   */
  constructor(
    private crypto:EncrDecrServiceService,
    private router: Router
    ) { }


/**
 * Metod used for decode userToken
 * @returns
 */

  accessDecrypt(){
    let accessKeyCrypt = localStorage.getItem('access');
    let accessDecript = this.crypto.get(environment.cryptoLocal,accessKeyCrypt);
    let keyParse:any = JSON.parse(accessDecript);
    return keyParse;
  }

  // UserCompany(): CompanyResponse{
  //   let access:CompanyResponse = this.accessDecrypt();
  //   return access['company'];
  // }

  // UserCompanyId(): string{
  //   let access:CompanyResponse = this.accessDecrypt();
  //   return access['company'].id;
  // }

  userInfo(): UserResponse {
    let access:UserResponseModel = this.accessDecrypt();
    return access['user'];
  }
  // userProfileId(): string {
  //   return this.userInfo().profile.id;
  // }

  facilityId(){
    console.log(this.router.url);
    let routerArray = this.router.url.split('/');
    let id:string;

    routerArray.forEach((element,index) => {
      if (element === 'facilities') {
       id = routerArray[index+2];
      }
    });



    // if (this.facilitInfo()) {
    //   return this.facilitInfo().id;
    // }else{
      // return this.UserCompanyId();

    // }

  }

}


