import { CreateUserRequests } from "./createUserRequests";

export interface UpdateUserRequests extends CreateUserRequests {
  username: string;
  //   firstName: string;
  //   lastName: string;
  //   jobTitle: string;
  //   phone: string;
    password: string;
    imageId: string;
    profilesId: string;
    status: boolean;
  //   operator: boolean;
}
