import { ProfileResponse } from "@shared/services/profiles/responses/profileResponse";

export interface UserResponse {
  status: boolean;
  id: string;
  dateCreate: string;
  dateUpdate: string;
  // jobTitle: string;
  // phone: string;
  imageId: string
  // status: boolean;
  // operator: boolean;
  username: string;
  profiles:ProfileResponse;
}
