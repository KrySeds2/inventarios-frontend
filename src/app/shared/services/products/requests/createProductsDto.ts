import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface CreateProductsDto {
  name:string;
  recipeId:string;
}
export interface RecipesModel{
  material:RawMaterialsResponse;
  amount_to_use:number;
}
