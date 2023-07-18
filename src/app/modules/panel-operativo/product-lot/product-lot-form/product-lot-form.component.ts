import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';

@Component({
  selector: 'app-product-lot-form',
  templateUrl: './product-lot-form.component.html',
  styleUrls: ['./product-lot-form.component.scss']
})
export class ProductLotFormComponent implements OnInit {
  @Input() formData: FormGroup;
  constructor(
    public validateErrors: ValidateFieldService
  ) { }
  ngOnInit(): void {
  }

}
