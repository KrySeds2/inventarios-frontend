import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceptionsTransformService } from '../services/receptions-transform.service';
import { ReceptionsCrudService } from 'src/app/shared/services/receptions/receptions-crud.service';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { ReceptionsFormModel } from '../models/receptionsFormModel';
import { CreateReceptionsDto } from '@shared/services/receptions/requests/createReceptionsDto';
import { FieldValidatorsService } from '@core/services/field-validators.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild('dialogLoading') dialogLoading: LoadingComponent;
  @ViewChild('dialogSuccess') dialogSuccess: DialogConfirmComponent;
  @ViewChild('dialogError') dialogError: DialogErrorComponent;

  formData: FormGroup;
  isDisabled: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private receptionsTransformService: ReceptionsTransformService,
    private receptionsCrudService: ReceptionsCrudService,
    private FVservice: FieldValidatorsService,
  ) {
    this.declareForm();
  }
  declareForm(): void {
    this.formData = this.fb.group({
      folio: [, [Validators.required]],
      arrivalDate: [, [Validators.required]],
      rawMaterial: [, [Validators.required]],
      amount: [, [Validators.required]],

    })
  }
  ngOnInit(): void {
  }

  submit() {
    console.log(this.formData.value);

    if (this.FVservice.invalidSubmit(this.formData)) {
      return;
    }
    this.dialogLoading.setDisplay(true);
    console.log(this.formData.value);
    let request = this.receptionsTransformService.toCreateReceptionsDto(this.formData.getRawValue());
    // const form: ReceptionsFormModel = this.formData.getRawValue();
    // const createReceptionsDto: CreateReceptionsDto = this.receptionsTransformService.toCreateReceptionsDto(form);

    // let request: ReceptionsFormModel = {
    //   folio: this.formData.value.folio,
    //   orderStatus: this.formData.value.orderStatus,
    //   arrivalDate: this.formData.value.arrivalDate,
    //   registerOut: this.formData.value.registerOutId,

    // }

    this.receptionsCrudService.create(request).subscribe({
      next: (response) => {
        this.dialogSuccess.setDisplay(true);
        this.dialogLoading.setDisplay(false);
        this.FVservice.completeSubmit(this.formData);
      },
      error: (error) => {
        this.dialogError.setDisplay(true, error);
        this.dialogLoading.setDisplay(false);
        this.FVservice.completeSubmit(this.formData);
      }
    }
    );
  }

  back(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}





