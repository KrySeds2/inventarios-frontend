import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Observable } from 'rxjs';
import { CreateUserRequest } from './requests/createUserRequest';
import { UpdateUserProfile } from './requests/updateUserProfile';
import { UpdateUserRequest } from './requests/updateUserRequest';
import { UserResponse } from './responses/userResponse';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = '/users';
  constructor(private http: HttpService) { }

  create(body: CreateUserRequest){
    return this.http.post(this.url,body);
  }
  update(body: Partial <UpdateUserRequest>, id: string){
    return this.http.put(`${this.url}/${id}`,body);
  }
  getAll(companyId: string): Observable<UserResponse[]>{
    return this.http.get<UserResponse[]>(`/companies/${companyId}/users`);
  }
  getOne(id): Observable<UserResponse>{
    return this.http.get<UserResponse>(`${this.url}/${id}`);
  }
  getByEmail(params:string): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`/users/company/?${params}`);
  }
  getProfileUser(): Observable<UserResponse> {
    return this.http.get('/users/profile');
  }
  updateUserProfile(body: Partial<UpdateUserProfile>): Observable<UserResponse> {
    return this.http.put('/users/profile',body);
  }
  resetPassword(body: Partial<UpdateUserProfile>): Observable<UserResponse> {
    return this.http.put('/users/reset-password',body);
  }
  //-----Custom-------------------------
  getCompany():Observable<any>{
    return this.http.get<any>(`${this.url}/company`);
  }
  updateStatus(status:boolean, id: string){
    return this.http.put(`${this.url}/activate/${id}`,{status:status});
  }
}
