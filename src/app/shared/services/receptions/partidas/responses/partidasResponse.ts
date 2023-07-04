import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface PartidasResponse {
  id:string;
  rawMaterial:RawMaterialsResponse;
  amount:string;
  delete:string;
  // edit:string;
}
