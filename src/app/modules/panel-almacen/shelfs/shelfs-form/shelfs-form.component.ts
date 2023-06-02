import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';

@Component({
  selector: 'app-shelfs-form',
  templateUrl: './shelfs-form.component.html',
  styleUrls: ['./shelfs-form.component.scss']
})
export class ShelfsFormComponent implements OnInit {
  @Input() formData: FormGroup;
  constructor(
    public validateErrors:ValidateFieldService,
  ) { }

  ngOnInit(): void {
  }

}
