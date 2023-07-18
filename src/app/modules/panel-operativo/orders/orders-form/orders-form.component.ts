import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductsCrudService } from '@shared/services/products/products-crud.service';
import { DropDownModel } from 'src/app/modules/panel-almacen/inventory/models/dropdown.Model';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';

@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.scss']
})
export class OrdersFormComponent implements OnInit {
  @Input() formData: FormGroup;
  listProducto:DropDownModel[] = [
  ];
  constructor(
    public validateErrors:ValidateFieldService,
    public productsCrudService:ProductsCrudService,
    private cd:ChangeDetectorRef,
  ) {
    this.getProducto();
  }

  ngOnInit(): void {
  }


  getProducto():void{
    this.productsCrudService.getAll().subscribe(
      (response:any) => {
        this.listProducto = response.map(
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
