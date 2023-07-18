import { Injectable } from '@angular/core';
import { ProductLotFormModel } from '../models/productLotFormModel';
import { CreateProductsLotDto } from '@shared/services/products-lot/requests/createProductsLotDto';
import { UpdateProductsLotDto } from '@shared/services/products-lot/requests/updateProductsLotDto';
import { ProductsLotResponse } from '@shared/services/products-lot/responses/productsLotResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsLotTransformService {
  constructor() { }

  toCreateProductsLotDto(form: ProductLotFormModel): CreateProductsLotDto {
    return {
      product: form.product,
      recipe: form.recipe
    }
  }

  toUpdateProductsLotDto(form: ProductLotFormModel): Partial<UpdateProductsLotDto> {
    return {
      product: form.product,
      recipe: form.recipe
    }
  }

 toProductsLotFormModel(response:ProductsLotResponse):ProductLotFormModel{
    return{
      product:response.product,
      recipe:response.recipe,
      loteCode:response.loteCode,
      dateOfExpiry: response.dateOfExpiry

    }
  }
}
