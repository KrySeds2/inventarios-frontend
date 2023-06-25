import { TableRow } from "src/app/shared/modules/tables/models/tableRow";

export interface RawMaterialsRow extends TableRow {
  nombre:string;
  idunicoesc:string;
  description?:string;
  status:boolean;
}
