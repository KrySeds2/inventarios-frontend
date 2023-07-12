import { Injectable } from '@angular/core';
import { PartidasModel } from '../models/receptionsFormModel';
import { CreatePartidasDto } from '@shared/services/receptions/partidas/requests/createPartidasDto';
import { UpdatePartidasDto } from '@shared/services/receptions/partidas/requests/updatePartidasDto';
import { PartidasResponse } from '@shared/services/receptions/partidas/responses/partidasResponse';

@Injectable({
  providedIn: 'root'
})
export class PartidasTransformService {

  constructor() { }

  toCreatePartidasDto(form: PartidasModel): CreatePartidasDto {
    return{
      rawMaterialId:[form.rawMaterial],
      amount:form.amount,
    }
  }

  toUpdatePartidasDto(form: PartidasModel): Partial<UpdatePartidasDto> {
    return{
      rawMaterialId:[form.rawMaterial],
      amount:form.amount,
    }
  }

   toReceptionsFormModel(response:PartidasResponse):PartidasModel{
    return{
      rawMaterial:response.rawMaterial,
      amount:response.amount
    }
  }
}
