import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { CreateReceptionsDto } from './requests/createReceptionsDto';
import { ReceptionsResponse } from './responses/receptionsResponse';
import { Observable } from 'rxjs';
import { UpdateReceptionsDto } from './requests/updateReceptionsDto';

@Injectable({
  providedIn: 'root'
})
export class ReceptionsCrudService {
  url='/recepcion';
  constructor(private http:HttpService) { }

  create(body:CreateReceptionsDto):Observable<ReceptionsResponse> {
    return this.http.post(this.url,body)
  }
  update(body: Partial <UpdateReceptionsDto>, id: string): Observable<ReceptionsResponse>{
    return this.http.patch(`${this.url}/${id}`, body);
  }
  updateStatus(body: Partial <UpdateReceptionsDto>, id: string): Observable<ReceptionsResponse>{
    return this.http.patch(`${this.url}/status/${id}`, body);
  }
  delete( id: string): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  getAll(params=''): Observable<ReceptionsResponse[]>{
    return this.http.get<ReceptionsResponse[]>(this.url+params);
  }
  getOne(id): Observable<ReceptionsResponse> {
    return this.http.get<ReceptionsResponse>(`${this.url}/${id}`);
  }
}
