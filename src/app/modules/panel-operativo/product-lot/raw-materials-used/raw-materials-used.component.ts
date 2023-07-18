import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';

@Component({
  selector: 'app-raw-materials-used',
  templateUrl: './raw-materials-used.component.html',
  styleUrls: ['./raw-materials-used.component.scss']
})
export class RawMaterialsUsedComponent implements OnInit {

  @Input() formData: FormGroup;
  constructor(
    public validateErrors: ValidateFieldService
  ) { }
  ngOnInit(): void {
  }

}
