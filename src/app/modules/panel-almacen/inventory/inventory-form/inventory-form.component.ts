import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';
import { DropDownModel} from 'src/app/modules/panel-almacen/inventory/models/dropdown.Model'
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
  ) { }

  ngOnInit(): void {
  }

  getAlmacen():void{
    this.listAlmacen.map(
      (row) => {
        return{
          label: row.label,
          value: row.value
        }
      }
    )
  }

  getAnaquel():void{
    this.listAnaquel.map(
      (row) => {
        return{
          label: row.label,
          value: row.value
        }
      }
    )
  }

  getMateriaPrima():void{
    this.listMateriaPrima.map(
      (row) => {
        return{
          label: row.label,
          value: row.value
        }
      }
    )
  }

}
