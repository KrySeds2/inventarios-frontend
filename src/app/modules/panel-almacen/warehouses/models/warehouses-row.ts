import { ShelfsResponse } from "@shared/services/shelfs/resquests/shelfsResponse";
import { TableRow } from "src/app/shared/modules/tables/models/tableRow";

export interface WarehousesRow extends TableRow {
  name:string;
  shelves:ShelfsResponse[];
  status:boolean;
  description:string;
  shelvesCount: number; // Número de anaqueles en el almacén (calculado en el componente)

}
