import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';

@Component({
  selector: 'app-product-manufacturing-form',
  templateUrl: './product-manufacturing-form.component.html',
  styleUrls: ['./product-manufacturing-form.component.scss']
})
export class ProductManufacturingFormComponent implements OnInit {
  @Input() formData: FormGroup;
  constructor( public validateErrors: ValidateFieldService) { }

  ngOnInit(): void {
  }

}
