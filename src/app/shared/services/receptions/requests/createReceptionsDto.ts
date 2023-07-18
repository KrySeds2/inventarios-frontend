import { RawMaterialsResponse } from "../../raw-materials/responses/rawMaterialsResponse";

export interface CreateReceptionsDto {
  folio:string;
  arrivalDate:string;
  orderStatus:string;
  registerOutId:string;
}

export interface CreatePartidasDto{
  rawMaterial:RawMaterialsResponse;
  amount:number;
}
