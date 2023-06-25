import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  ) { }

  ngOnInit(): void {
  }

  getProducto():void{
    this.listProducto.map(
      (row) => {
        return{
          label: row.label,
          value: row.value
        }
      }
    )
  }

}
