// import { ApplicationModule } from '@angular/core';

// export interface ApplicationResponse{
//     publicKey:string,
//     name:string,
//     parent:string,
//     route:string,
//     iconName:string,
//     enabled:boolean,
// }

export interface ApplicationResponse{
    module:ApplicationModule;
    profileKey:string;
    profileName:string;
    write:boolean;
    delete:boolean;

}

interface ApplicationModule{
    enabled:boolean;
    iconName:string;
    name:string;
    parent:string;
    publicKey:string;
    route:string;
}