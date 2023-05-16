import { CreateShelfsDto } from "./createShelfsDto";

export interface UpdateShelfsDto extends CreateShelfsDto {
  status:boolean;
}
