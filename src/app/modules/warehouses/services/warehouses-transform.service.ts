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
        descripcion:form.descripcion
      }
    }

    toUpdateWarehousesDto(form:WarehousesFormModel):Partial<UpdateWarehousesDto>{
      return{
        name:form.name,
        descripcion:form.descripcion
      }
    }

    static toWarehousesFormModel(response:WarehousesResponse):WarehousesFormModel{
      return{
        name:response.name,
        id:response.id
      }
    }
}
