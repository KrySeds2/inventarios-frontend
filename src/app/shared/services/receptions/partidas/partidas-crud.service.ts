import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { CreatePartidasDto } from './requests/createPartidasDto';
import { Observable } from 'rxjs';
import { PartidasResponse } from './responses/partidasResponse';
import { UpdatePartidasDto } from './requests/updatePartidasDto';

@Injectable({
  providedIn: 'root'
})
export class PartidasCrudService {
  url = '/registrar-partidas';
  constructor(private http: HttpService) { }

  create(body: CreatePartidasDto): Observable<PartidasResponse> {
    return this.http.post(this.url, body)
  }

  update(body: Partial<UpdatePartidasDto>, id: string): Observable<PartidasResponse> {
    return this.http.put(`${this.url}/${id}`, body);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  getAll(params=''): Observable<PartidasResponse[]>{
    return this.http.get<PartidasResponse[]>(this.url+params);
  }

  getOne(id): Observable<PartidasResponse> {
    return this.http.get<PartidasResponse>(`${this.url}/${id}`);
  }

}
