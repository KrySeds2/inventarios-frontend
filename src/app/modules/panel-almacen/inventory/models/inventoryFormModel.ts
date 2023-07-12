import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";
import { ShelfsResponse } from "@shared/services/shelfs/resquests/shelfsResponse";
import { WarehousesResponse } from "@shared/services/warehouses/responses/warehousesResponse";

export interface InventoryFormModel {
  warehId: string;
  shelfId: string;
  rawMaterialId: string;
  idUnicoPaquete:string;
  dateOfExpiry:string;
  amount:number;
  status?: boolean;

}
