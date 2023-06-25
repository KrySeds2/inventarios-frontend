import { TableRow } from "src/app/shared/modules/tables/models/tableRow";

export interface OrdersRow extends TableRow {
  folio: number;
  producto: string;
  cantidad: number;
  status: boolean;
}
