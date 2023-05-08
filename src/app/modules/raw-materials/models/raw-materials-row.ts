import { TableRow } from "src/app/shared/modules/tables/models/tableRow";

export interface RawMaterialsRow extends TableRow {
  name:string;
  idUnicoEscanear:string;
  status:boolean;
}
