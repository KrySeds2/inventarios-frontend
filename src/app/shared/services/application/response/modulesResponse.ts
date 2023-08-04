export interface ModulesResponse{
    publicKey:string;
    name:string;
    parent:parentResponse;
    route:string;
    label:string;
    sequence:number;
    icon:string;
    enabled:boolean;
}

interface parentResponse{
    name:string;
    publicKey:string;
}
