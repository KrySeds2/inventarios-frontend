import { Injectable } from '@angular/core';
import { WarehousesFormModel } from '../models/warehousesFormModel';
import { CreateWarehousesDto } from 'src/app/shared/services/warehouses/requests/createWarehousesDto';
import { UpdateWarehousesDto } from 'src/app/shared/services/warehouses/requests/updateWarehousesDto';
import { WarehousesResponse } from 'src/app/shared/services/warehouses/responses/warehousesResponse';

@Injectable({
  providedIn: 'root'
})
export class WarehousesTransformService {

  constructor() { }

    toCreateWarehousesDto(form:WarehousesFormModel):CreateWarehousesDto{
      return{
        name:form.name,
        description:form.description
      }
    }

    toUpdateWarehousesDto(form:WarehousesFormModel):Partial<UpdateWarehousesDto>{
      return{
        name:form.name,
        description:form.description
      }
    }

     toWarehousesFormModel(response:WarehousesResponse):WarehousesFormModel{
      return{
        name:response.name,
        description:response.description,
        id:response.id,
        shelf:response.shelf

      }
    }
}
