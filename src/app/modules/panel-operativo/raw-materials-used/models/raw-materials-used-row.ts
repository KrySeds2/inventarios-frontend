
import { TableRow } from "@shared/modules/tables/models/tableRow";
import { InventoryResponse } from "@shared/services/inventory/responses/inventoryResponse";
import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface RawMaterialsUsedRow extends TableRow{
  amount:string;
  folio:string;
  // inventories:InventoryResponse
  dateOfExpire:string;
  idpackage:string;
  rawM:string;
}
