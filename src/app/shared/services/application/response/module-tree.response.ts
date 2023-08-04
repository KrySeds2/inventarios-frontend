export interface ModuleTreeResponse{
    enabled:boolean;
    iconName:string;
    id:number;
    name:string;
    parent:parenTreeModel;
    publicKey:string;
    route:string;
    submodules:ModuleTreeResponse[]
}

interface parenTreeModel{
    enabled:boolean;
    iconName:string;
    id:number;
    name:string;
    publicKey:string;
    route:string;
}