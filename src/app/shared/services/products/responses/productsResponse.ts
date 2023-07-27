import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface ProductsResponse {
  name:string;
  id:string;
  status:boolean;
  orderStatus:string;
  recipeId:RecipesModel;
}
export interface RecipesModel{
  id: string
  material:RawMaterialsResponse;
  amount_to_use:number;
}
