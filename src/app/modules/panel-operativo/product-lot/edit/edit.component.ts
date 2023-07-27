import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { ProductsLotTransformService } from '../services/products-lot-transform.service';
import { ProductsLotCrudService } from '@shared/services/products-lot/products-lot-crud.service';
import { ProductsLotResponse } from '@shared/services/products-lot/responses/productsLotResponse';
import { ProductLotFormModel } from '../models/productLotFormModel';
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
  response: ProductsLotResponse
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productsLotTransformService: ProductsLotTransformService,
    private productsCrudService: ProductsLotCrudService
  ) {
    this.declareForm();
  }
  declareForm():void{
    this.formData = this.fb.group({
      product:[,[Validators.required]],
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
    let request:ProductLotFormModel = {
    product:this.formData.value.folio,
    recipe:this.formData.value.recipe,
    dateOfExpiry:this.formData.value.dateOfExpiry,
    loteCode:this.formData.value.loteCode
    }

    const form = this.formData.getRawValue();
    // const request =this.shiftsTransformService.updateShiftsDto(form)
    const partialRequest = Utils.updatePartial(request);

    this.productsCrudService.update(partialRequest,this.id).subscribe(
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
    this.productsCrudService.getOne(id).subscribe(
      (resp) => {
        this.response=resp;
        const form = this.productsLotTransformService.toProductsLotFormModel(resp);
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

}
