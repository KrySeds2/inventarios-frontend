import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface RecipesResponse {
  id:string;
  material:RawMaterialsResponse;
  amount_to_use:number;
  delete:string;
}
