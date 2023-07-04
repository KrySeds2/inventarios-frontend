import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface CreatePartidasDto {
  rawMaterial:RawMaterialsResponse;
  amount:number;
}
