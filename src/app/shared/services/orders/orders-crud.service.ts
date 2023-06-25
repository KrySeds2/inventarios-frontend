import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { OrdersResponse } from './responses/ordersResponse';
import { CreateOrdersDto } from './requests/createOrdersDto';
import { Observable } from 'rxjs';
import { UpdateOrdersDto } from './requests/updateOrdersDto';

@Injectable({
  providedIn: 'root'
})
export class OrdersCrudService {
  url='';
  constructor(private http:HttpService) { }

  create(body:CreateOrdersDto):Observable<OrdersResponse> {
    return this.http.post(this.url,body)
  }
  update(body: Partial <UpdateOrdersDto>, id: string): Observable<OrdersResponse>{
    return this.http.put(`${this.url}/${id}`, body);
  }
  delete( id: string): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  getAll(params=''): Observable<OrdersResponse[]>{
    return this.http.get<OrdersResponse[]>(this.url+params);
  }
  getOne(id): Observable<OrdersResponse> {
    return this.http.get<OrdersResponse>(`${this.url}/${id}`);
  }
}
