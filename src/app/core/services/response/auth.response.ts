import { ProfileResponse } from "src/app/shared/services/profiles/responses/profileResponse";

export interface AuthResponseModel{
  access_token:string;
  user:UserResponseModel;
}
export interface UserResponseModel {
  id: string;
  dateCreate: Date;
  dateUpdate: Date;

  name: string;

  imageId?: any;
  firstName: string;
  lastName: string;

  status: boolean;
  profile: ProfileResponse;

}
