export interface CreateUserRequests {
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  phone: string;
  password: string;
  imageId: string;
  profileId: string;
  operator: boolean;
}

export interface CreateUserSetupRequest {
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  phone: string;
  password: string;
}
