import { TableRow } from "src/app/shared/modules/tables/models/tableRow";

export interface WarehousesRow extends TableRow {
  name:string;
  anaqueles:number;
  status:boolean;
}
