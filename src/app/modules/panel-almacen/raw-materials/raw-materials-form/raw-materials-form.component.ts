import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';

@Component({
  selector: 'app-raw-materials-form',
  templateUrl: './raw-materials-form.component.html',
  styleUrls: ['./raw-materials-form.component.scss']
})
export class RawMaterialsFormComponent implements OnInit {
  @Input() formData: FormGroup;
  constructor(
    public validateErrors:ValidateFieldService,
  ) { }

  ngOnInit(): void {
  }

}
