import { ShelfsResponse } from "@shared/services/shelfs/resquests/shelfsResponse";

export interface WarehousesResponse {
  name: string;
  id:string;
  description?:string;
  status?:boolean;
  shelf:ShelfsResponse;
}
