import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { ProductsResponse } from '@shared/services/products/responses/productsResponse';
import { ProductsTransformService } from '../services/products-transform.service';
import { ProductsCrudService } from '@shared/services/products/products-crud.service';
import { ProductsFormModel } from '../models/productsFormModel';
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
  response: ProductsResponse
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productsTransformService: ProductsTransformService,
    private productsCrudService: ProductsCrudService
  ) {
    this.declareForm();
  }
  declareForm():void{
    this.formData = this.fb.group({
      name:[,[Validators.required]],
      // rawMaterial:[,[Validators.required]],
      // amount:[,[Validators.required]],
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
    let request:ProductsFormModel = {
    name:this.formData.value.folio,
    recipes:this.formData.value.recipes
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
        const form = this.productsTransformService.toProductsFormModel(resp);
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
