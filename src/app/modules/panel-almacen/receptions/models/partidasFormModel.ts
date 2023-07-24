import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface PartidasFormModel{
  // id:string;
  rawMaterialId:RawMaterialsResponse[];
  amount:number;
}
