import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RawMaterialsResponse } from '../raw-materials/responses/rawMaterialsResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MateriasPrimasService {

  constructor(private http:HttpClient) { }

  getAll(params=''): Observable<RawMaterialsResponse[]>{
    return this.http.get<RawMaterialsResponse[]>('https://08cf-187-254-104-188.ngrok-free.app/materia-p'+params);
  }
}
