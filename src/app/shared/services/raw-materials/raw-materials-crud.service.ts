import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { CreateRawMaterialsDto } from './requests/createRawMaterialsDto';
import { RawMaterialsResponse } from './responses/rawMaterialsResponse';
import { Observable } from 'rxjs';
import { UpdateRawMaterialsDto } from './requests/updateRawMaterialsDto';

@Injectable({
  providedIn: 'root'
})
export class RawMaterialsCrudService {
  url='/raw-material';
  constructor(private http:HttpService) { }

  create(body:CreateRawMaterialsDto):Observable<RawMaterialsResponse> {
    return this.http.post(this.url,body)
  }
  update(body: Partial <UpdateRawMaterialsDto>, id: string): Observable<RawMaterialsResponse>{
    return this.http.patch(`${this.url}/${id}`, body);
  }
  updateStatus(body: Partial <UpdateRawMaterialsDto>, id: string): Observable<RawMaterialsResponse>{
    return this.http.patch(`${this.url}/status/${id}`, body);
  }
  delete( id: string): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }

  getAll(params=''): Observable<RawMaterialsResponse[]>{
    return this.http.get<RawMaterialsResponse[]>(this.url+params);
  }
  getOne(id): Observable<RawMaterialsResponse> {
    return this.http.get<RawMaterialsResponse>(`${this.url}/${id}`);
  }
}
