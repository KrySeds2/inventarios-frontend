import { ProductsResponse } from "@shared/services/products/responses/productsResponse";

export interface CreateOrdersDto {
  productId:ProductsResponse[];
  amount:number;
  folio:string;

}
