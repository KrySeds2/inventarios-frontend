import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @Input() formData: FormGroup;

  constructor(  private fb: FormBuilder, public validateErrors: ValidateFieldService) {
  this.declareForm()
  }
  declareForm():void{
    this.formData = this.fb.group({
      folio:[,[Validators.required]],
      // rawMaterial:[,[Validators.required]],
      // amount:[,[Validators.required]],
    })
  }
  ngOnInit(): void {
  }

}
