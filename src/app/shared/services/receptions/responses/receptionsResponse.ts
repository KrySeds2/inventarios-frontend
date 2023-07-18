import { RawMaterialsResponse } from "../../raw-materials/responses/rawMaterialsResponse";

export interface ReceptionsResponse {
  status:boolean;
  id:string;
  folio:string;
  arrivalDate:string;
  orderStatus:string;
  registerOut:Partidas;
}

export interface Partidas {
  id: string
  amount: number;
  rawMaterial: RawMaterialsResponse;
}
