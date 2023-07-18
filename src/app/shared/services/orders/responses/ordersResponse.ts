import { ProductsResponse } from "@shared/services/products/responses/productsResponse";

export interface OrdersResponse {
  id:string;
  status?:boolean;
  folio:string;
  amount:number;
  product:ProductsResponse;
}
