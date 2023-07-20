export interface CreateUserRequest {
    email: string;
    name: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
    phone: string;
    password: string;
    imageId: string;
    profileId: string;
    companyId: string;
    operator: boolean;
}

export interface CreateUserSetupRequest{
    email: string;
    name: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
    phone: string;
    password: string;
}
