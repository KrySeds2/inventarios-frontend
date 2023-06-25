import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface ReceptionsFormModel {
  folio:string;
  estado_pedido:string;
  date_llegada:string;
  partidas:Partidas[]
}

export interface Partidas{
  materiasPrimas:RawMaterialsResponse;
  cantidad:string;
}
