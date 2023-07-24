import { CreateProductsDto } from "./createProductsDto";

export interface UpdateProductsDto extends CreateProductsDto {
  status?:boolean;
}
