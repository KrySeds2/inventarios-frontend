import { CreateProductsLotDto } from "./createProductsLotDto";

export interface UpdateProductsLotDto extends CreateProductsLotDto {
  status?:boolean;
}
