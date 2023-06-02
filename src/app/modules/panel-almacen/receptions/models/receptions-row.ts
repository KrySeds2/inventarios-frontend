import { TableRow } from "src/app/shared/modules/tables/models/tableRow";

export interface ReceptionsRow extends TableRow {
  folio:string;
  fechaLlegada:string;
  estadoPedido:string;
  status:boolean;
}
