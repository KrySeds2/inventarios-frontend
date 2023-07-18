import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface ProductsFormModel {

  name:string;
  // cantidad:number;
  status?:boolean;
  // id:string;
  recipes:RecipesModel;
}

export interface RecipesModel{
  material:RawMaterialsResponse;
  amount_to_use:number;
}
