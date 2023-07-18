import { CreateOrdersDto } from "./createOrdersDto";

export interface UpdateOrdersDto extends CreateOrdersDto{
  status?: boolean;
}
