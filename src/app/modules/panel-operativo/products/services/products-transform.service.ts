import { Injectable } from '@angular/core';
import { ProductsFormModel } from '../models/productsFormModel';
import { CreateProductsDto } from '@shared/services/products/requests/createProductsDto';
import { UpdateProductsDto } from '@shared/services/products/requests/updateProductsDto';
import { ProductsResponse } from '@shared/services/products/responses/productsResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsTransformService {

  constructor() { }

  toCreateInventoryDto(form: ProductsFormModel): CreateProductsDto {
    return {
      name: form.name,

    }
  }

  toUpdateInventoryDto(form: ProductsFormModel): Partial<UpdateProductsDto> {
    return {
      name: form.name,

    }
  }

 toInventoryFormModel(response:ProductsResponse):ProductsFormModel{
    return{
      name:response.name,

    }
  }
}
