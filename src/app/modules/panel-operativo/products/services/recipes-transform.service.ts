import { Injectable } from '@angular/core';
import { CreateRecipesDto } from '@shared/services/products/recipes/requests/createRecipesDto';
import { UpdateRecipesDto } from '@shared/services/products/recipes/requests/updateRecipesDto';
import { RecipesResponse } from '@shared/services/products/recipes/responses/recipesResponse';
import { RecipesModel } from '../models/productsFormModel';

@Injectable({
  providedIn: 'root'
})
export class RecipesTransformService {

  constructor() { }

  toCreatePartidasDto(form: RecipesModel): CreateRecipesDto {
    return{
      materialId:[form.material],
      amount_to_use:form.amount_to_use,
    }
  }

  toUpdatePartidasDto(form: RecipesModel): Partial<UpdateRecipesDto> {
    return{
      materialId:[form.material],
      amount_to_use:form.amount_to_use,
    }
  }

   toReceptionsFormModel(response:RecipesResponse):RecipesModel{
    return{
      material:response.material,
      amount_to_use:response.amount_to_use
    }
  }
}
