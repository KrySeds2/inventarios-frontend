import { ShelfsResponse } from "@shared/services/shelfs/resquests/shelfsResponse";
import { TableRow } from "src/app/shared/modules/tables/models/tableRow";

export interface WarehousesRow extends TableRow {
  name:string;
  shelf:ShelfsResponse;
  status:boolean;
  description:string;
}
