import { TableRow } from "@shared/modules/tables/models/tableRow";

export interface ProductManufacturingRow extends TableRow {
  product:string;
  amount:string;
  packageCode:string;
}
