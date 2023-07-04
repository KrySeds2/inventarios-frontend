import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceptionsResponse } from 'src/app/shared/services/receptions/responses/receptionsResponse';
import { ReceptionsTransformService } from '../services/receptions-transform.service';
import { ReceptionsCrudService } from 'src/app/shared/services/receptions/receptions-crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formData: FormGroup;
  id: string;
  response: ReceptionsResponse
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private receptionsTransformService: ReceptionsTransformService,
    private recptionsCrudService: ReceptionsCrudService
  ) {
    this.declareForm();
  }
  declareForm(): void {
    this.formData = this.fb.group({
      folio:[,[Validators.required]],
      arrivalDate:[,[Validators.required]],
      rawMaterial:[,[Validators.required]],
      amount:[,[Validators.required]],
    })
  }
  ngOnInit(): void {
  }
  submit(): void {

  }

  getItem(id: string): void {

  }

  back(): void {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  validName(): any {

  }
}
