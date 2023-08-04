import { Injectable } from '@angular/core';
import { JwtService } from '@core/services/jwt.service';
import { CreateUserRequests } from '@shared/services/users/requests/createUserRequests';
import { UpdateUserRequests } from '@shared/services/users/requests/updateUserRequests';
import { UserResponse } from '@shared/services/users/responses/userResponse';
import { environment } from 'src/environments/environment';
import { UserForm } from '../models/userForm';

@Injectable({
  providedIn: 'root'
})
export class UsersTransformService {

  constructor() { }
  toCreateUserRequest(companyId: string, form: UserForm): CreateUserRequests {
    return {
      username: form.username,
      imageId: form.imageId,
      password: form.password,
      profilesId: form.profilesId,


    };
  }
  toUpdateUserRequest(form: UserForm): Partial<UpdateUserRequests> {
    return {
      username: form.username,
      imageId: form.imageId,
      password: form.password,
      profilesId: form.profilesId,

    };
  }
  toUserForm(response: UserResponse): UserForm {
    return {
      username: response.username,
      profilesId: response.profiles.id,
      password: '',

      imageId: response.imageId,
      image: {
        file: null,
        name: null,
        type: null,
        url: (response.imageId) ? environment.image + response.imageId : environment.noImage,
      }
    };
  }
}
