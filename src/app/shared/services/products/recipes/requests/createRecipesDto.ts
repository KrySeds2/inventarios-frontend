import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface CreateRecipesDto {
  material:RawMaterialsResponse[];
  amount_to_use:number;
}
