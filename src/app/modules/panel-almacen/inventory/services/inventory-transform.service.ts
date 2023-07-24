import { Injectable } from '@angular/core';
import { CreateInventoryDto } from 'src/app/shared/services/inventory/requests/createInventoryDto';
import { InventoryFormModel } from '../models/inventoryFormModel';
import { UpdateInventoryDto } from 'src/app/shared/services/inventory/requests/updateInventoryDto';
import { InventoryResponse } from 'src/app/shared/services/inventory/responses/inventoryResponse';

@Injectable({
  providedIn: 'root'
})
export class InventoryTransformService {

  constructor() { }

  toCreateInventoryDto(form: InventoryFormModel): CreateInventoryDto {
    return {
      warehId: [form.warehId],
      shelfId: [form.shelfId],
      rawMaterialId: [form.rawMaterialId],
      idpackage: form.idpackage,
      amount: form.amount,
      dateOfExpiry: form.dateOfExpiry
    }
  }

  toUpdateInventoryDto(form: InventoryFormModel): Partial<UpdateInventoryDto> {
    return {
      warehId:[form.warehId],
      shelfId:[form.shelfId],
      rawMaterialId:[form.rawMaterialId],
      idpackage: form.idpackage,
      amount: form.amount,
      dateOfExpiry: form.dateOfExpiry,
      status:form.status
    }
  }

 toInventoryFormModel(response:InventoryResponse):InventoryFormModel{
    return{
      warehId:{
        id:response.wareh.id,
        name:response.wareh.name,
        shelves:response.wareh.shelves
      },
      shelfId:{
       id:response.shelf.id,
       name:response.shelf.name,
       status:response.shelf.status
      },
      rawMaterialId:{
        name:response.rawMaterial_.name,
        scaneId:response.rawMaterial_.scaneId,
        status:response.rawMaterial_.status,
        id:response.rawMaterial_.id,
        description:response.rawMaterial_.description
      },
      idpackage:response.idpackage,
      amount:response.amount,
      dateOfExpiry:response.dateOfExpiry,
      status:response.status
    }
  }
}
