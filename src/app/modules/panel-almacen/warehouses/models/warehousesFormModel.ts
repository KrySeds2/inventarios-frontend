import { ShelfsResponse } from "@shared/services/shelfs/resquests/shelfsResponse";

export interface WarehousesFormModel {
  name:string;
  description?:string;
  status?:boolean;
  id:string;
  shelf:ShelfsResponse
}
