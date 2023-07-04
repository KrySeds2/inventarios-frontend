import { Injectable } from '@angular/core';
import { ReceptionsFormModel } from '../models/receptionsFormModel';
import { CreateReceptionsDto } from 'src/app/shared/services/receptions/requests/createReceptionsDto';
import { UpdateReceptionsDto } from 'src/app/shared/services/receptions/requests/updateReceptionsDto';
import { ReceptionsResponse } from 'src/app/shared/services/receptions/responses/receptionsResponse';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReceptionsTransformService {

  constructor() { }

  toCreateReceptionsDto(form: ReceptionsFormModel): CreateReceptionsDto {
    return{
      folio:form.folio,
      arrivalDate:form.arrivalDate,
      orderStatus:form.orderStatus,
      registerOut:form.registerOut.map((item) =>{
        return{
          rawMaterial:item.rawMaterial,
          amount:item.amount
        }
      })
    }
  }

  toUpdateReceptionsDto(form: ReceptionsFormModel): Partial<UpdateReceptionsDto> {
    return{
      folio:form.folio,
      arrivalDate:form.arrivalDate,
      orderStatus:form.orderStatus,
      registerOut:form.registerOut.map((item) =>{
        return{
          rawMaterial:item.rawMaterial,
          amount:item.amount
        }
      })
    }
  }

   toReceptionsFormModel(response:ReceptionsResponse):ReceptionsFormModel{
    return{
      folio:response.folio,
      arrivalDate:response.arrivalDate,
      orderStatus:response.orderStatus,
      registerOut:response.registerOut.map((item) =>{
        return{
          rawMaterial:item.rawMaterial,
          amount:item.amount
        }
      })
    }
  }

  // toFormPartidas(){
  //   return this.fb.group({
  //     rawMaterial:[,[Validators.required]],
  //     amount:[,[Validators.required]]
  //   })
  // }
}
