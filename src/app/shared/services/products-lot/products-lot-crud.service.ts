import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { CreateProductsLotDto } from './requests/createProductsLotDto';
import { Observable } from 'rxjs';
import { ProductsLotResponse } from './responses/productsLotResponse';
import { UpdateProductsLotDto } from './requests/updateProductsLotDto';

@Injectable({
  providedIn: 'root'
})
export class ProductsLotCrudService {

  url='/products';
  constructor(private http:HttpService) { }

  create(body:CreateProductsLotDto):Observable<ProductsLotResponse> {
    return this.http.post(this.url,body)
  }
  update(body: Partial <UpdateProductsLotDto>, id: string): Observable<ProductsLotResponse>{
    return this.http.patch(`${this.url}/${id}`, body);
  }
  updateStatus(body: Partial <UpdateProductsLotDto>, id: string): Observable<ProductsLotResponse>{
    return this.http.patch(`${this.url}/status/${id}`, body);
  }
  delete( id: string): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  getAll(params=''): Observable<ProductsLotResponse[]>{
    return this.http.get<ProductsLotResponse[]>(this.url+params);
  }
  getOne(id): Observable<ProductsLotResponse> {
    return this.http.get<ProductsLotResponse>(`${this.url}/${id}`);
  }
}
