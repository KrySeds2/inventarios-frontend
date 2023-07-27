import { TableRow } from "@shared/modules/tables/models/tableRow";

export interface RawMaterialsRow extends TableRow {
  codePackage: string;
  amount:string;
  dateOfExpiry:string;
  warehouse:string;
  shelfs:string;
}
