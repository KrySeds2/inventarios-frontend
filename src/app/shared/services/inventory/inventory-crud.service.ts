import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { CreateInventoryDto } from './requests/createInventoryDto';
import { InventoryResponse } from './responses/inventoryResponse';
import { Observable } from 'rxjs';
import { UpdateInventoryDto } from './requests/updateInventoryDto';

@Injectable({
  providedIn: 'root'
})
export class InventoryCrudService {
  url='/inventory';
  constructor(private http:HttpService) { }

  create(body:CreateInventoryDto):Observable<InventoryResponse> {
    return this.http.post(this.url,body)
  }
  update(body: Partial <UpdateInventoryDto>, id: string): Observable<InventoryResponse>{
    return this.http.patch(`${this.url}/${id}`, body);
  }
   updateStatus(body: Partial <UpdateInventoryDto>, id: string): Observable<InventoryResponse>{
    return this.http.patch(`${this.url}/status/${id}`, body);
  }
  delete( id: string): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  getAll(params=''): Observable<InventoryResponse[]>{
    return this.http.get<InventoryResponse[]>(this.url+params);
  }
  getOne(id): Observable<InventoryResponse> {
    return this.http.get<InventoryResponse>(`${this.url}/${id}`);
  }
}
