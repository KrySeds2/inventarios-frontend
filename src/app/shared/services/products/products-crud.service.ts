import { Injectable } from '@angular/core';
import { CreateProductsDto } from './requests/createProductsDto';
import { ProductsResponse } from './responses/productsResponse';
import { UpdateProductsDto } from './requests/updateProductsDto';
import { Observable } from 'rxjs';
import { HttpService } from '@core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsCrudService {

  url='/products';
  constructor(private http:HttpService) { }

  create(body:CreateProductsDto):Observable<ProductsResponse> {
    return this.http.post(this.url,body)
  }
  update(body: Partial <UpdateProductsDto>, id: string): Observable<ProductsResponse>{
    return this.http.patch(`${this.url}/${id}`, body);
  }
  updateStatus(body: Partial <UpdateProductsDto>, id: string): Observable<ProductsResponse>{
    return this.http.patch(`${this.url}/status/${id}`, body);
  }
  delete( id: string): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  getAll(params=''): Observable<ProductsResponse[]>{
    return this.http.get<ProductsResponse[]>(this.url+params);
  }
  getOne(id): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(`${this.url}/${id}`);
  }
}
