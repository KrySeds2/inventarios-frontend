import { RawMaterialsResponse } from "../../raw-materials/responses/rawMaterialsResponse";

export interface CreateReceptionsDto {
  folio:string;
  arrivalDate:string;
  orderStatus:string;
  registerOut:CreatePartidasDto[];
}

export interface CreatePartidasDto{
  rawMaterial:RawMaterialsResponse;
  amount:number;
}
