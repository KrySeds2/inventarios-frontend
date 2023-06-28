import { TableRow } from "src/app/shared/modules/tables/models/tableRow";

export interface RawMaterialsRow extends TableRow {
  name:string;
  scaneId:string;
  description:string;
  status:boolean;
}
