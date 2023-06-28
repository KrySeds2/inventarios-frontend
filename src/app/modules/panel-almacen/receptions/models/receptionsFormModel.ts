import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface ReceptionsFormModel {
  folio:string;
  estadoDelPedido:string;
  fechaDeLlegada:string;
  registrarPartida:Partidas[]
}

export interface Partidas{
  materiasPrima:RawMaterialsResponse;
  cantidad:string;
}
