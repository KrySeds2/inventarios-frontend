import { RawMaterialsResponse } from "../../raw-materials/responses/rawMaterialsResponse";

export interface CreateReceptionsDto {
  folio:string;
  date_llegada:string;
  estado_pedido:string;
  partidas:CreatePartidasDto[];
}

export interface CreatePartidasDto{
  materiasPrimas:RawMaterialsResponse;
  cantidad:string;
}
