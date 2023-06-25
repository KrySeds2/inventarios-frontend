import { Injectable } from '@angular/core';
import { OrdersFormModel } from '../models/ordersFormModel';
import { CreateOrdersDto } from 'src/app/shared/services/orders/requests/createOrdersDto';
import { UpdateOrdersDto } from 'src/app/shared/services/orders/requests/updateOrdersDto';
import { OrdersResponse } from 'src/app/shared/services/orders/responses/ordersResponse';

@Injectable({
  providedIn: 'root'
})
export class OrdersTransformService {

  constructor() { }

  toCreateInventoryDto(form: OrdersFormModel): CreateOrdersDto {
    return {
      folio: form.folio,
      producto: form.producto,
      cantidad: form.cantidad,
    }
  }

  toUpdateInventoryDto(form: OrdersFormModel): Partial<UpdateOrdersDto> {
    return {
      folio: form.folio,
      producto: form.producto,
      cantidad: form.cantidad,
      status:form.status
    }
  }

  static toInventoryFormModel(response:OrdersResponse):OrdersFormModel{
    return{
      folio:response.folio,
      producto:response.producto,
      cantidad:response.cantidad,
      id:response.id,
      status:response.status
    }
  }
}
