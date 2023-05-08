export interface CreateInventoryDto {
  warehouse:string;
  shelf:string;
  rawMaterial:string;
  quantity:number;
  uniquePackageID:string;
  expirationDate:string;
}
