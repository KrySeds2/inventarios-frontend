import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";
import { ShelfsResponse } from "@shared/services/shelfs/resquests/shelfsResponse";
import { WarehousesResponse } from "@shared/services/warehouses/responses/warehousesResponse";

export interface InventoryFormModel {
  warehId: WarehousesResponse;
  shelfId: ShelfsResponse;
  rawMaterialId: RawMaterialsResponse;
  idpackage:string;
  dateOfExpiry:string;
  amount:number;
  status?: boolean;

}
