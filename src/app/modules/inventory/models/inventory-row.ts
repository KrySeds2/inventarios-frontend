import { TableRow } from "src/app/shared/modules/tables/models/tableRow";
export interface InventoryRow extends TableRow {
  almacen:string;
  anaquel:string;
  materiaPrima:string;
  cantidad:number;
  idUnicoPaquete:string;
  fechaCaducidad:string;
  status:boolean;
}
