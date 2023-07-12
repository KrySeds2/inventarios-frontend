import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";
import { ShelfsResponse } from "@shared/services/shelfs/resquests/shelfsResponse";
import { WarehousesResponse } from "@shared/services/warehouses/responses/warehousesResponse";
import { TableRow } from "src/app/shared/modules/tables/models/tableRow";
export interface InventoryRow extends TableRow {
  wareh: string;
  shelf: string;
  rawMaterial_: string;
  idUnicoPaquete:string;
  dateOfExpiry:string;
  amount:number;
  status?: boolean;
  id:string;
}
