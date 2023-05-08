import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { CreateWarehousesDto } from './requests/createWarehousesDto';
import { WarehousesResponse } from './responses/warehousesResponse';
import { Observable } from 'rxjs';
import { UpdateWarehousesDto } from './requests/updateWarehousesDto';

@Injectable({
  providedIn: 'root'
})
export class WarehousesCrudService {
  url='';
  constructor(private http:HttpService) { }

  create(body:CreateWarehousesDto):Observable<WarehousesResponse> {
    return this.http.post(this.url,body)
  }
  update(body: Partial <UpdateWarehousesDto>, id: string): Observable<WarehousesResponse>{
    return this.http.put(`${this.url}/${id}`, body);
  }
  delete( id: string): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  getAll(params=''): Observable<WarehousesResponse[]>{
    return this.http.get<WarehousesResponse[]>(this.url+params);
  }
  getOne(id): Observable<WarehousesResponse> {
    return this.http.get<WarehousesResponse>(`${this.url}/${id}`);
  }
}
