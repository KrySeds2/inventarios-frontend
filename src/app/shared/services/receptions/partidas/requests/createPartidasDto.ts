import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface CreatePartidasDto {
  materiasPrima:RawMaterialsResponse;
  cantidad:number;
}
