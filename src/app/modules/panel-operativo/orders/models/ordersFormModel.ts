import { ProductsResponse } from "@shared/services/products/responses/productsResponse";

export interface OrdersFormModel {
  folio:string;
  product:ProductsResponse;
  amount:number;
  status?:boolean;
  id:string;
}
