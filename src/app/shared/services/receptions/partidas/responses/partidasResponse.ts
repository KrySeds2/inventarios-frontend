import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface PartidasResponse {
  id:string;
  materiasPrima:RawMaterialsResponse;
  cantidad:string;
  delete:string;
  // edit:string;
}
