import { RawMaterialsResponse } from "../../raw-materials/responses/rawMaterialsResponse";

export interface ReceptionsResponse {
  status:boolean;
  id:string;
  folio:string;
  fechaDeLlegada:string;
  estadoDelPedido:string;
  registrarPartida:PartidasResponse[];
}

export interface PartidasResponse {
  id: string,
  cantidad: string;
  materiasPrima: RawMaterialsResponse;
}
