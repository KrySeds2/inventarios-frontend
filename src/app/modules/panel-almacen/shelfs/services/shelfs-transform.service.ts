import { Injectable } from '@angular/core';
import { ShelfsFormModel } from '../models/shelfsFormModel';
import { CreateShelfsDto } from 'src/app/shared/services/shelfs/responses/createShelfsDto';
import { UpdateShelfsDto } from 'src/app/shared/services/shelfs/responses/updateShelfsDto';
import { ShelfsResponse } from 'src/app/shared/services/shelfs/resquests/shelfsResponse';

@Injectable({
  providedIn: 'root'
})
export class ShelfsTransformService {

  constructor() { }

  toCreateShelfsDto(form: ShelfsFormModel): CreateShelfsDto {
    return {
      name: form.name,
      descripcion: form.descripcion
    }
  }

  toUpdateShelfsDto(form: ShelfsFormModel): Partial<UpdateShelfsDto> {
    return {
      name: form.name,
      descripcion: form.descripcion
    }
  }

  static toShelfsFormModel(response:ShelfsResponse):ShelfsFormModel {
    return{
      name: response.name,
      id: response.id
    }
  }

}
