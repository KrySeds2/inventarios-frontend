import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';
import { DropDownModel} from 'src/app/modules/panel-almacen/inventory/models/dropdown.Model'
import { RawMaterialsCrudService } from '@shared/services/raw-materials/raw-materials-crud.service';
import { WarehousesCrudService } from '@shared/services/warehouses/warehouses-crud.service';
import { ShelfsCrudService } from '@shared/services/shelfs/shelfs-crud.service';
@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss']
})
export class InventoryFormComponent implements OnInit {
  @Input() formData: FormGroup;
  listAlmacen:DropDownModel[] = [
  ];
  listAnaquel:DropDownModel[] = [
  ];
  listMateriaPrima:DropDownModel[] = [
  ];
  constructor(
    public validateErrors:ValidateFieldService,
    private rawMaterialsCrudService: RawMaterialsCrudService,
    private warehouseCrudService: WarehousesCrudService,
    private shelfsCrudService: ShelfsCrudService,
    private cd:ChangeDetectorRef,
  ) {
    this.getAlmacen();
    this.getAnaquel();
    this.getMateriaPrima();
  }

  ngOnInit(): void {
  }



  getAlmacen():void{
    this.warehouseCrudService.getAll().subscribe(
      (response:any) => {
        this.listAlmacen = response.map(
          (row)=>{
            return{
              label: row.name,
              value: row.id
            }
          }
        )
        this.cd.detectChanges();
      },(error:any) => {
        console.log(error);
      }
    )
  }


  getAnaquel():void{
    this.shelfsCrudService.getAll().subscribe(
      (response:any) => {
        this.listAnaquel = response.map(
          (row)=>{
            return{
              label: row.name,
              value: row.id
            }
          }
        )
        this.cd.detectChanges();
      },(error:any) => {
        console.log(error);
      }
    )
  }
  getMateriaPrima():void{
    this.rawMaterialsCrudService.getAll().subscribe(
      (response:any) => {
        this.listMateriaPrima = response.map(
          (row)=>{
            return{
              label: row.name,
              value: row.id
            }
          }
        )
        this.cd.detectChanges();
      },(error:any) => {
        console.log(error);
      }
    )
  }

}
