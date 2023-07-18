import { ProductsResponse } from "@shared/services/products/responses/productsResponse";
import { RawMaterialsResponse } from "@shared/services/raw-materials/responses/rawMaterialsResponse";

export interface ProductsLotResponse {
  id:string;
  status:boolean;
  loteCode:string;
  dateOfExpiry:string;
  product:string;
  recipe:RecipeResponse;
}
 export interface RecipeResponse {
  material:RawMaterialsResponse,
  amount_to_use:number;
 }
