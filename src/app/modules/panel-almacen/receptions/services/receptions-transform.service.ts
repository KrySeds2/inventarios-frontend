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
      fechaDeLlegada:form.fechaDeLlegada,
      estadoDelPedido:form.estadoDelPedido,
      registrarPartida:form.registrarPartida.map((item) =>{
        return{
          materiasPrima:item.materiasPrima,
          cantidad:item.cantidad
        }
      })
    }
  }

  toUpdateReceptionsDto(form: ReceptionsFormModel): Partial<UpdateReceptionsDto> {
    return{
      folio:form.folio,
      fechaDeLlegada:form.fechaDeLlegada,
      estadoDelPedido:form.estadoDelPedido,
      registrarPartida:form.registrarPartida.map((item) =>{
        return{
          materiasPrima:item.materiasPrima,
          cantidad:item.cantidad
        }
      })
    }
  }

   toReceptionsFormModel(response:ReceptionsResponse):ReceptionsFormModel{
    return{
      folio:response.folio,
      fechaDeLlegada:response.fechaDeLlegada,
      estadoDelPedido:response.estadoDelPedido,
      registrarPartida:response.registrarPartida.map((item) =>{
        return{
          materiasPrima:item.materiasPrima,
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
