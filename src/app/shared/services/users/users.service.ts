import { Injectable } from '@angular/core';
import { CreateUserRequests } from './requests/createUserRequests';
import { UpdateUserRequests } from './requests/updateUserRequests';
import { UserResponse } from './responses/userResponse';
import { Observable } from 'rxjs';
import { HttpService } from '@core/services/http.service';
import { UpdateUserProfile } from './requests/updateUserProfile';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url='/user';
  constructor(private http: HttpService) { }

  create(body:CreateUserRequests):Observable<UserResponse> {
    return this.http.post(this.url,body)
  }
  update(body: Partial <UpdateUserRequests>, id: string): Observable<UserResponse>{
    return this.http.patch(`${this.url}/${id}`, body);
  }
  updateStatus(body: Partial <UpdateUserRequests>, id: string): Observable<UserResponse>{
    return this.http.patch(`${this.url}/status/${id}`, body);
  }
  delete( id: string): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  getAll(params=''): Observable<UserResponse[]>{
    return this.http.get<UserResponse[]>(this.url+params);
  }
  getOne(id): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.url}/${id}`);
  }
}
