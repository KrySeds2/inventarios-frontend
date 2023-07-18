import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";
import { ShelfsResponse } from "@shared/services/shelfs/resquests/shelfsResponse";
import { WarehousesResponse } from "@shared/services/warehouses/responses/warehousesResponse";

export interface CreateInventoryDto {
  warehId:WarehousesResponse[];
  shelfId:ShelfsResponse[];
  rawMaterialId:RawMaterialsResponse[];
  amount:number;
  idpackage:string;
  dateOfExpiry:string;
}
