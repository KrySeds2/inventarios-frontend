import { RawMaterialsResponse } from "../../raw-materials/responses/rawMaterialsResponse";

export interface ReceptionsResponse {
  status:boolean;
  id:string;
  folio:string;
  arrivalDate:string;
  orderStatus:string;
  registerOut:PartidasResponse[];
}

export interface PartidasResponse {
  id: string,
  amount: string;
  rawMaterial: RawMaterialsResponse;
}
