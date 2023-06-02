import { TableRow } from "src/app/shared/modules/tables/models/tableRow";
export interface InventoryRow extends TableRow {
  almacen: string;
  anaquel: string;
  idUnicoMateriaPrima: string;
  idUnicoPaquete:string;
  fechaCaducidad:string;
  cantidad:number;
  status?: boolean;
  id:string;
}
