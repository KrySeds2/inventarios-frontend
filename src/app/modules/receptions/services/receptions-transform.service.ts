import { Injectable } from '@angular/core';
import { ReceptionsFormModel } from '../models/receptionsFormModel';
import { CreateReceptionsDto } from 'src/app/shared/services/receptions/requests/createReceptionsDto';
import { UpdateReceptionsDto } from 'src/app/shared/services/receptions/requests/updateReceptionsDto';
import { ReceptionsResponse } from 'src/app/shared/services/receptions/responses/receptionsResponse';

@Injectable({
  providedIn: 'root'
})
export class ReceptionsTransformService {

  constructor() { }

  // toCreateReceptionsDto(form: ReceptionsFormModel): CreateReceptionsDto {
  //   return
  // }

  // toUpdateReceptionsDto(form: ReceptionsFormModel): Partial<UpdateReceptionsDto> {
  //   return {}
  // }

  // static toReceptionsFormModel(response:ReceptionsResponse):ReceptionsFormModel{
  //   return;
  // }
}
