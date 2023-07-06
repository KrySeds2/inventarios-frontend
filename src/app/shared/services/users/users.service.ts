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
  url: string = '/users';
  constructor(private http: HttpService) { }

  create(body: CreateUserRequests){
    return this.http.post(this.url,body);
  }
  update(body: Partial <UpdateUserRequests>, id: string){
    return this.http.put(`${this.url}/${id}`,body);
  }
  getAll(companyId: string): Observable<UserResponse[]>{
    return this.http.get<UserResponse[]>(`/companies/${companyId}/users`);
  }
  getModules(){
    return this.http.get(`/extra-reports/user-monitor-modules`);
  }
  getUserCompany(companyId: string): Observable<UserResponse[]>{
    return this.http.get<UserResponse[]>(`/users/company/${companyId}`);
  }
  getAllUsers(): Observable<UserResponse[]>{
    return this.http.get<UserResponse[]>(`/users/list-all-users`);
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
