import { Injectable } from '@angular/core';
import { RecipesModel } from '../models/productLotFormModel';
import { CreateRecipesDto } from '@shared/services/products/recipes/requests/createRecipesDto';
import { UpdateRecipesDto } from '@shared/services/products/recipes/requests/updateRecipesDto';
import { RecipesResponse } from '@shared/services/products/recipes/responses/recipesResponse';

@Injectable({
  providedIn: 'root'
})
export class RecipesTransformService {

  constructor() { }

  toCreateRecipesDto(form: RecipesModel): CreateRecipesDto {
    return{
      material:[form.material],
      amount_to_use:form.amount_to_use,
    }
  }

  toUpdateRecipesDto(form: RecipesModel): Partial<UpdateRecipesDto> {
    return{
      material:[form.material],
      amount_to_use:form.amount_to_use,
    }
  }

   toRecipesFormModel(response:RecipesResponse):RecipesModel{
    return{
      material:response.material,
      amount_to_use:response.amount_to_use
    }
  }
}
