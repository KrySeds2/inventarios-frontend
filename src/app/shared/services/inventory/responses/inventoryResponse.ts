import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";
import { ShelfsResponse } from "@shared/services/shelfs/resquests/shelfsResponse";
import { WarehousesResponse } from "@shared/services/warehouses/responses/warehousesResponse";

export interface InventoryResponse {
  wareh: WarehousesResponse;
  shelf: ShelfsResponse;
  rawMaterial_: RawMaterialsResponse;
  idpackage:string;
  dateOfExpiry:string;
  amount:number;
  id:string;
  status:boolean;
}
