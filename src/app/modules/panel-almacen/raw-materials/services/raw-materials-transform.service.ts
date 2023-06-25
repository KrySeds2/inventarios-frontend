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
      nombre: form.nombre,
      idunicoesc:form.idunicoesc,
      description:form.description,
    }
  }

  updateRawMaterialsDto(form:RawMaterialsFormModel):Partial<UpdateRawMaterialsDto>{
    return{
      nombre: form.nombre,
      idunicoesc:form.idunicoesc,
      description:form.description
    }
  }

   toRawMaterialsFormModel(response:RawMaterialsResponse):RawMaterialsFormModel{
    return{
      nombre:response.nombre,
      idunicoesc:response.idunicoesc,
      description:response.description
    }
  }
}
