import { TableRow } from "src/app/shared/modules/tables/models/tableRow";

export interface ProductsRow extends TableRow {
  name: string;
  statusOrders: string;

  status: boolean;
}
