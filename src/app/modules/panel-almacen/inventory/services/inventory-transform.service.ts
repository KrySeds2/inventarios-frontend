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
      warehId: form.warehId,
      shelfId: form.shelfId,
      rawMaterialId: form.rawMaterialId,
      idUnicoPaquete: form.idUnicoPaquete,
      amount: form.amount,
      dateOfExpiry: form.dateOfExpiry
    }
  }

  toUpdateInventoryDto(form: InventoryFormModel): Partial<UpdateInventoryDto> {
    return {
      warehId:form.warehId,
      shelfId:form.shelfId,
      rawMaterialId:form.rawMaterialId,
      idUnicoPaquete: form.idUnicoPaquete,
      amount: form.amount,
      dateOfExpiry: form.dateOfExpiry,
      status:form.status
    }
  }

//  toInventoryFormModel(response:InventoryResponse):InventoryFormModel{
//     return{
//       wareh:response.wareh,
//       shelf:response.shelf,
//       rawMaterial_:response.rawMaterial_,
//       idUnicoPaquete:response.idUnicoPaquete,
//       amount:response.amount,
//       dateOfExpiry:response.dateOfExpiry,
//       status:response.status
//     }
//   }
}
