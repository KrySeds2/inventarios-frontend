import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface CreateProductsLotDto {
  product:string;
  recipe: Recipe;
}

export interface Recipe{
  material:RawMaterialsResponse;
  amount_to_use:number;
}
