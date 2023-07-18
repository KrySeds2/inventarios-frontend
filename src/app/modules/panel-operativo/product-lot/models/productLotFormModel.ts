import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface ProductLotFormModel {
  status?:boolean;
  product:string;
  loteCode:string;
  dateOfExpiry:string;
  recipe:RecipesModel;
}

export interface RecipesModel{
  material:RawMaterialsResponse;
  amount_to_use:number;
}
