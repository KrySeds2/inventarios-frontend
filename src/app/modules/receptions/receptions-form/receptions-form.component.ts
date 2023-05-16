import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';

@Component({
  selector: 'app-receptions-form',
  templateUrl: './receptions-form.component.html',
  styleUrls: ['./receptions-form.component.scss']
})
export class ReceptionsFormComponent implements OnInit {
  @Input() formData: FormGroup;
  constructor(
    public validateErrors:ValidateFieldService,
  ) { }

  ngOnInit(): void {
  }

}
