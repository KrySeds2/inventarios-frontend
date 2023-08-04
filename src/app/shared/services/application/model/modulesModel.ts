export interface ModulesModel{
    index:number;
    publicKey:string;
    name:string;
    parent:parentResponse;
    route:string;
    iconName:string;
    enabled:boolean;
}

interface parentResponse{
    name:string;
    publicKey:string;
}