import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface ReceptionsFormModel {
  folio:string;
  orderStatus:string;
  arrivalDate:string;
  registerOut:string;
}

export interface Partidas{
  id:string;
  rawMaterial:RawMaterialsResponse;
  amount:number;
}
