import { CompanyResponse } from "../../company/response/companyResponse";
import { ProfileResponse } from "../../profiles/responses/profileResponse";

export interface UserResponse {
  id: string;
  dateCreate: string;
  dateUpdate: string;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  phone: string;
  profile: ProfileResponse;
  imageId: string
  company: CompanyResponse;
  status: boolean;
  operator: boolean;
  needUpdatePass: boolean;
}

