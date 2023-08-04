import { Injectable } from '@angular/core';
import { ModulesModel } from './model/modulesModel';
import { ModuleCreateRequest } from './request/moduleRequestCreate';
import { ModuleRequestUpdate } from './request/moduleRequestUpdate';
import { PermitRequestCreate } from './request/permitRequestCreate';
import { ModulesResponse } from './response/modulesResponse';

@Injectable({
  providedIn: 'root',
})
export class ApplicationModelService {
  constructor() { }

  toModuleCreateRequest(body: ModulesModel): ModuleCreateRequest {
    console.log('toModuleCreateRequest', body);
    return {
      iconName: body.iconName,
      name: body.name,
      route: body.route,
    };
  }

  toModuleUpdateRequestForm(body: ModulesModel, response: ModulesResponse): ModuleRequestUpdate {
    return {
      publicKey: body.publicKey,
      name: body.name,
      parent: body.parent.publicKey,
      route: body.route,
      iconName: body.iconName,
      enabled: response.enabled,
    };
  }
  toModuleUpdateRequest(body: ModulesModel): ModuleRequestUpdate {
    return {
      publicKey: body.publicKey,
      name: body.name,
      parent: body.parent?.publicKey,
      route: body.route,
      iconName: body.iconName,
      enabled: body.enabled,
    };
  }
  toPermitCreateRequest(body) {
    const permits: PermitRequestCreate[] = [];

    console.log(body);

    for (let index = 0; index < body.length; index++) {
      if (body[index].read) {
        let module: PermitRequestCreate = {
          module: body[index].module,
          write: body[index].write,
          delete: body[index].delete,
        };

        if (body[index].permits.length) {
          permits.push(module);
          this.moduleExtract(permits, body[index].permits, '');
        } else {
          permits.push(module);
        }
      }
    }

    return permits;
  }

  moduleExtract(
    permitRequest: PermitRequestCreate[],
    children,
    body
  ): PermitRequestCreate[] {
    if (children) {
      for (let index = 0; index < children.length; index++) {
        if (children[index].read) {
          let module: PermitRequestCreate = {
            module: children[index].module,
            write: children[index].write,
            delete: children[index].delete,
          };

          if (children[index].permits.length) {
            permitRequest.push(module);
            this.moduleExtract(permitRequest, children[index].permits, '');
          } else {
            permitRequest.push(module);
          }
        }
      }
    } else {
    }

    return permitRequest;
  }

  generateTreeModule(items: ModulesResponse[], search: string) {
  }



}


export interface TreeModule extends ModulesResponse {
  childrens: TreeModule[];
}
