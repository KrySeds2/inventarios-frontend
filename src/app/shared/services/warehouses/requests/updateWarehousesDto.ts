import { CreateWarehousesDto } from "./createWarehousesDto";

export interface UpdateWarehousesDto extends CreateWarehousesDto{
  status:boolean;
}
