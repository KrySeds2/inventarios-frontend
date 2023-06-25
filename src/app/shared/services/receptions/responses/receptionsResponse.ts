import { RawMaterialsResponse } from "../../raw-materials/responses/rawMaterialsResponse";

export interface ReceptionsResponse {
  status:boolean;
  id:string;
  folio:string;
  date_llegada:string;
  estado_pedido:string;
  partidas:PartidasResponse[];
}

export interface PartidasResponse {
  id: string,
  cantidad: string;
  materia_prima: RawMaterialsResponse;
}
