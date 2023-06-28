import { Injectable } from '@angular/core';
import { RawMaterialsFormModel } from '../models/rawMaterialsFormModel';
import { CreateRawMaterialsDto } from 'src/app/shared/services/raw-materials/requests/createRawMaterialsDto';
import { UpdateRawMaterialsDto } from 'src/app/shared/services/raw-materials/requests/updateRawMaterialsDto';
import { RawMaterialsResponse } from 'src/app/shared/services/raw-materials/responses/rawMaterialsResponse';

@Injectable({
  providedIn: 'root'
})
export class RawMaterialsTransformService {

  constructor() { }

  toCreateRawMaterialsDto(form:RawMaterialsFormModel):CreateRawMaterialsDto{
    return{
      name: form.name,
      scaneId:form.scaneId,
      description:form.description,
    }
  }

  updateRawMaterialsDto(form:RawMaterialsFormModel):Partial<UpdateRawMaterialsDto>{
    return{
      name: form.name,
      scaneId:form.scaneId,
      description:form.description
    }
  }

   toRawMaterialsFormModel(response:RawMaterialsResponse):RawMaterialsFormModel{
    return{
      name:response.name,
      scaneId:response.scaneId,
      description:response.description
    }
  }
}
