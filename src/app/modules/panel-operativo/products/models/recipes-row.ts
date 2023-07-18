import { TableRow } from "@shared/modules/tables/models/tableRow";

export interface RecipesRow extends TableRow{
  material:string;
  amount_to_use:number;
  index:number;
  id:string;
}
