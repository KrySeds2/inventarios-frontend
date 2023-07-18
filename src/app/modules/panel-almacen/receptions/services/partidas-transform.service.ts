import { Injectable } from '@angular/core';
import { Partidas } from '../models/receptionsFormModel';
import { CreatePartidasDto } from '@shared/services/receptions/partidas/requests/createPartidasDto';
import { UpdatePartidasDto } from '@shared/services/receptions/partidas/requests/updatePartidasDto';
import { PartidasResponse } from '@shared/services/receptions/partidas/responses/partidasResponse';

@Injectable({
  providedIn: 'root'
})
export class PartidasTransformService {

  constructor() { }

  toCreatePartidasDto(form: Partidas): CreatePartidasDto {
    return{
      rawMaterialId:[form.rawMaterial],
      amount:form.amount,
    }
  }

  toUpdatePartidasDto(form: Partidas): Partial<UpdatePartidasDto> {
    return{
      rawMaterialId:[form.rawMaterial],
      amount:form.amount,
    }
  }

   toReceptionsFormModel(response:PartidasResponse):Partidas{
    return{
      rawMaterial:{
        name:response.rawMaterial.name,
        id:response.rawMaterial.id,
        scaneId:response.rawMaterial.scaneId,
        status:response.rawMaterial.status,
        description:response.rawMaterial.description
      },
      amount:response.amount,
      id:response.id
    }
  }
}
