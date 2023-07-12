import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { CreateShelfsDto } from './responses/createShelfsDto';
import { ShelfsResponse } from './resquests/shelfsResponse';
import { Observable } from 'rxjs';
import { UpdateShelfsDto } from './responses/updateShelfsDto';

@Injectable({
  providedIn: 'root'
})
export class ShelfsCrudService {
  url='/shelf';
  constructor(private http:HttpService) { }

  create(body:CreateShelfsDto):Observable<ShelfsResponse> {
    return this.http.post(this.url,body)
  }
  update(body: Partial <UpdateShelfsDto>, id: string): Observable<ShelfsResponse>{
    return this.http.patch(`${this.url}/${id}`, body);
  }
  updateStatus(body: Partial <UpdateShelfsDto>, id: string): Observable<ShelfsResponse>{
    return this.http.patch(`${this.url}/status/${id}`, body);
  }
  delete( id: string): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  getAll(params=''): Observable<ShelfsResponse[]>{
    return this.http.get<ShelfsResponse[]>(this.url+params);
  }
  getOne(id): Observable<ShelfsResponse> {
    return this.http.get<ShelfsResponse>(`${this.url}/${id}`);
  }
}
