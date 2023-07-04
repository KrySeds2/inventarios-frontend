import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";
import { TableRow } from "src/app/shared/modules/tables/models/tableRow";

export interface PartidasRow extends TableRow {
  rawMaterial:RawMaterialsResponse;
  amount:string;
  index:number;
  id:string;
}
