import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface CreatePartidasDto {
  rawMaterialId:RawMaterialsResponse[];
  amount:number;
}
