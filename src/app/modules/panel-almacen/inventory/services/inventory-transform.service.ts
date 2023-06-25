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
      almacen: form.almacen,
      anaquel: form.anaquel,
      idUnicoMateriaPrima: form.idUnicoMateriaPrima,
      idUnicoPaquete: form.idUnicoPaquete,
      cantidad: form.cantidad,
      fechaCaducidad: form.fechaCaducidad
    }
  }

  toUpdateInventoryDto(form: InventoryFormModel): Partial<UpdateInventoryDto> {
    return {
      almacen: form.almacen,
      anaquel: form.anaquel,
      idUnicoMateriaPrima: form.idUnicoMateriaPrima,
      idUnicoPaquete: form.idUnicoPaquete,
      cantidad: form.cantidad,
      fechaCaducidad: form.fechaCaducidad,
      status:form.status
    }
  }

  static toInventoryFormModel(response:InventoryResponse):InventoryFormModel{
    return{
      almacen:response.almacen,
      anaquel:response.anaquel,
      idUnicoMateriaPrima:response.idUnicoMateriaPrima,
      idUnicoPaquete:response.idUnicoPaquete,
      cantidad:response.cantidad,
      fechaCaducidad:response.fechaCaducidad,
      status:response.status
    }
  }
}
