import { TableRow } from "@shared/modules/tables/models/tableRow";

export interface ProductLotRow extends TableRow {
  product:string;
  loteCode:string;
  dateOfExpiry:string;
  status:boolean;
}
