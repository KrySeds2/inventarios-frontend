import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface ReceptionsFormModel {
  folio:string;
  orderStatus:string;
  arrivalDate:string;
  registerOut:PartidasModel[]
}

export interface PartidasModel{
  rawMaterial:RawMaterialsResponse;
  amount:number;
}
