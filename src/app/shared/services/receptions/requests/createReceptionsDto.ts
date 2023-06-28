import { RawMaterialsResponse } from "../../raw-materials/responses/rawMaterialsResponse";

export interface CreateReceptionsDto {
  folio:string;
  fechaDeLlegada:string;
  estadoDelPedido:string;
  registrarPartida:CreatePartidasDto[];
}

export interface CreatePartidasDto{
  materiasPrima:RawMaterialsResponse;
  cantidad:string;
}
