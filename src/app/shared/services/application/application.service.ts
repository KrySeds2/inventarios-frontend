import { Injectable } from '@angular/core';

import { PermitKeys } from '../common/model/permitKeys.Model';
import { ApplicationResponse } from './response/applicationResponse';
import { Router } from '@angular/router';
import { ModulesResponse } from './response/modulesResponse';
import { ModuleCreateRequest } from './request/moduleRequestCreate';
import { ModuleRequestUpdate } from './request/moduleRequestUpdate';
import { ModuleTreeResponse } from './response/module-tree.response';
import { HttpService } from 'src/app/core/services/http.service';
import { EncrDecrServiceService } from '@core/services/encr-decr-service.service';
import { JwtService } from '@core/services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  activeRoute: string;

  constructor(private http: HttpService, private jwtservice: JwtService, private crypto: EncrDecrServiceService, private router: Router) {

  }


  getApplicationModule(param) {
    //let employeeInfo = this.jwtservice.accessDecrypt();
    //console.log(employeeInfo)
    // return this.http.get<ApplicationResponse[]>('/app/profile/'+employeeInfo.profileKey+'/permissions/'+param);
    return this.http.get<ApplicationResponse[]>('/app/guard/profile/+employeeInfo.profileKey/permissions/' + param);

  }

  getModule(param) {
    // return this.http.get<ApplicationResponse[]>('/app/modules'+param);
    return this.http.get<ApplicationResponse[]>('/app/guard/modules' + param);

  }

  getModules() {
    // return this.http.get<ModulesResponse[]>('/app/modules');
    return this.http.get<ModulesResponse[]>('/app/modules');

  }
  getModuleByPk(moduleKey) {
    return this.http.get<ModulesResponse>('/app/modules/' + moduleKey);
  }

  setKeys(keys: PermitKeys) {

    console.log("_ApplicationService_Keys", keys);

    const userAccess: PermitKeys = keys;

    let accessCrypt = this.crypto.set('1]x(t"T53FIMx}p_', JSON.stringify(userAccess));
    localStorage.removeItem('permits');
    localStorage.setItem('permits', accessCrypt);
  }


  accessKeyDecrypt() {
    let accessKeyCrypt = localStorage.getItem('permits');
    let accessDecript = this.crypto.get('1]x(t"T53FIMx}p_', accessKeyCrypt);
    let keyParse: PermitKeys = JSON.parse(accessDecript);
    return keyParse;
  }

  routeGuard() {
    let keys: PermitKeys = this.accessKeyDecrypt();

    return this.getApplicationModule('?module_parent_key=' + keys.parent).subscribe(
      (response: ApplicationResponse[]) => {
        console.log("guardresponse", response);

        for (let index = 0; index < response.length; index++) {
          if (response[index].module.publicKey === keys.current) {
            // this.router.navigateByUrl('/'+response[index].module.route);
            return response[index].module.route

          }
        }
      }
    )
  }


  createSubModule(body: ModuleCreateRequest, moduleKey) {
    return this.http.post<any[]>('/app/modules/' + moduleKey + '/submodules', body);
  }

  updateModule(body: ModuleRequestUpdate) {
    return this.http.put<any>('/app/modules', body);
  }

  getModulesParam(params) {
    // return this.http.get<ModulesResponse[]>('/app/modules'+params)
    return this.http.get<ModulesResponse[]>('/app/guard/modules' + params)

  }

  getModulesTree() {
    return this.http.get<ModuleTreeResponse>('/app/guard/modules/tree');
  }

  getSubmodules(parentKey) {
    return this.http.get<ModulesResponse[]>('/app/modules/' + parentKey + '/submodules');
  }

  createProfilePermits(profileKey, body) {
    return this.http.post<any[]>('/app/profile/' + profileKey + '/permissions/bulk', body);
  }
  getProfilePermits(profileKey) {
    return this.http.get<any[]>('/app/profile/' + profileKey + '/permissions');
  }

}
