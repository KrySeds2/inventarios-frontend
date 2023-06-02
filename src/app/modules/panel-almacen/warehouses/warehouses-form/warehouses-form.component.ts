import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';

@Component({
  selector: 'app-warehouses-form',
  templateUrl: './warehouses-form.component.html',
  styleUrls: ['./warehouses-form.component.scss']
})
export class WarehousesFormComponent implements OnInit {
  @Input() formData: FormGroup;
  constructor(
    public validateErrors:ValidateFieldService,
  ) { }

  ngOnInit(): void {
  }

}
