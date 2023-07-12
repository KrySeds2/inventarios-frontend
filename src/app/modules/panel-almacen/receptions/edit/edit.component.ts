import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceptionsResponse } from 'src/app/shared/services/receptions/responses/receptionsResponse';
import { ReceptionsTransformService } from '../services/receptions-transform.service';
import { ReceptionsCrudService } from 'src/app/shared/services/receptions/receptions-crud.service';
import { DialogConfirmComponent } from '@shared/modules/dialogs/components/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/components/loading/loading.component';
import { ReceptionsFormModel } from '../models/receptionsFormModel';
import { Utils } from '@shared/services/common/utils';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formData: FormGroup;
  @ViewChild('dialogSuccess') dialogSuccess: DialogConfirmComponent;
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogErrorFindItem') dialogErrorFindItem: DialogErrorComponent;
  @ViewChild('dialogLoading') dialogLoading: LoadingComponent;
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
    console.log(this.formData.value);

    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
    this.dialogLoading.setDisplay(true);
    // const form: ShiftsFormModel = this.formData.getRawValue();
    let request:ReceptionsFormModel = {
    folio:this.formData.value.folio,
    arrivalDate:this.formData.value.arrivalDate,
    orderStatus:this.formData.value.orderStatus,
    registerOut:this.formData.value.registerOut
    }

    const form = this.formData.getRawValue();
    // const request =this.shiftsTransformService.updateShiftsDto(form)
    const partialRequest = Utils.updatePartial(request);

    this.recptionsCrudService.update(partialRequest,this.id).subscribe(
      (response) => {
        this.dialogLoading.setDisplay(false);
        this.dialogSuccess.setDisplay(true, response);
      }, (error) => {
        this.dialogLoading.setDisplay(false);
        this.dialogError.setDisplay(true, error);
      }
    );
  }

  getItem(id: string): void {
    this.recptionsCrudService.getOne(id).subscribe(
      (resp) => {
        this.response=resp;
        const form = this.receptionsTransformService.toReceptionsFormModel(resp);
        this.formData.patchValue(form);
        // this.formData.patchValue({
        //   name:response.name,
        //   isLastWorkShift: response.isLastWorkShift,
        //   initTime:response.initTime,
        //   endTime:response.endTime,
        //   companyId:this.facilityId
        // });
      }, (error) => {
        console.log(error);
        this.dialogLoading.setDisplay(false);
        this.dialogErrorFindItem.setDisplay(true, error);
      }
    );
  }

  back(): void {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  validName(): any {

  }
}
