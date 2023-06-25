import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface PartidasResponse {
  id:string;
  materia_prima:RawMaterialsResponse;
  cantidad:string;
  delete:string;
  edit:string;
}
