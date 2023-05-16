import { TableRow } from "src/app/shared/modules/tables/models/tableRow";

export interface PartidasRow extends TableRow {
  materiaPrima:string;
  cantidad:number;
}
