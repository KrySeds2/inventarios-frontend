import { TableRow } from "src/app/shared/modules/tables/models/tableRow";

export interface OrdersRow extends TableRow {
  folio: string;
  productId: string;
  amount: number;
  status: boolean;
}
