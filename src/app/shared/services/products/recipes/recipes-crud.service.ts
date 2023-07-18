import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { CreateRecipesDto } from './requests/createRecipesDto';
import { RecipesResponse } from './responses/recipesResponse';
import { Observable } from 'rxjs';
import { UpdateRecipesDto } from './requests/updateRecipesDto';

@Injectable({
  providedIn: 'root'
})
export class RecipesCrudService {
  url='/products';
  constructor(private http:HttpService) { }

  create(body:CreateRecipesDto):Observable<RecipesResponse> {
    return this.http.post(this.url,body)
  }
  update(body: Partial <UpdateRecipesDto>, id: string): Observable<RecipesResponse>{
    return this.http.patch(`${this.url}/${id}`, body);
  }
  updateStatus(body: Partial <UpdateRecipesDto>, id: string): Observable<RecipesResponse>{
    return this.http.patch(`${this.url}/status/${id}`, body);
  }
  delete( id: string): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  getAll(params=''): Observable<RecipesResponse[]>{
    return this.http.get<RecipesResponse[]>(this.url+params);
  }
  getOne(id): Observable<RecipesResponse> {
    return this.http.get<RecipesResponse>(`${this.url}/${id}`);
  }
}
