import { Injectable } from '@angular/core';
import { ReceptionsFormModel } from '../models/receptionsFormModel';
import { CreateReceptionsDto } from 'src/app/shared/services/receptions/requests/createReceptionsDto';
import { UpdateReceptionsDto } from 'src/app/shared/services/receptions/requests/updateReceptionsDto';
import { ReceptionsResponse } from 'src/app/shared/services/receptions/responses/receptionsResponse';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReceptionsTransformService {

  constructor() { }

  toCreateReceptionsDto(form: ReceptionsFormModel): CreateReceptionsDto {
    return{
      folio:form.folio,
      date_llegada:form.date_llegada,
      estado_pedido:form.estado_pedido,
      partidas:form.partidas.map((item) =>{
        return{
          materiasPrimas:item.materiasPrimas,
          cantidad:item.cantidad
        }
      })
    }
  }

  toUpdateReceptionsDto(form: ReceptionsFormModel): Partial<UpdateReceptionsDto> {
    return{
      folio:form.folio,
      date_llegada:form.date_llegada,
      estado_pedido:form.estado_pedido,
      partidas:form.partidas.map((item) =>{
        return{
          materiasPrimas:item.materiasPrimas,
          cantidad:item.cantidad
        }
      })
    }
  }

   toReceptionsFormModel(response:ReceptionsResponse):ReceptionsFormModel{
    return{
      folio:response.folio,
      date_llegada:response.date_llegada,
      estado_pedido:response.estado_pedido,
      partidas:response.partidas.map((item) =>{
        return{
          materiasPrimas:item.materia_prima,
          cantidad:item.cantidad
        }
      })
    }
  }

  // toFormPartidas(){
  //   return this.fb.group({
  //     materiasPrimas:[,[]],
  //     cantidad:[,[]]
  //   })
  // }
}
