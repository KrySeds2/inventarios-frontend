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
      productId: [form.product],
      amount: form.amount,
    }
  }

  toUpdateInventoryDto(form: OrdersFormModel): Partial<UpdateOrdersDto> {
    return {
      folio: form.folio,
      productId:[ form.product],
      amount: form.amount,
      status:form.status
    }
  }

   toInventoryFormModel(response:OrdersResponse):OrdersFormModel{
    return{
      folio:response.folio,
      product:{
        name:response.product.name,
        id:response.product.id,
        status:response.product.status,
        orderStatus:response.product.orderStatus,
        recipes:response.product.recipes
      },
      amount:response.amount,
      id:response.id,
      status:response.status
    }
  }
}
