import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrdersTransformService } from '../services/orders-transform.service';
import { OrdersCrudService } from '@shared/services/orders/orders-crud.service';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { OrdersFormModel } from '../models/ordersFormModel';
import { Utils } from '@shared/services/common/utils';
import { ProductsResponse } from '@shared/services/products/responses/productsResponse';
import { OrdersResponse } from '@shared/services/orders/responses/ordersResponse';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @ViewChild('dialogSuccess') dialogSuccess: DialogConfirmComponent;
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogErrorFindItem') dialogErrorFindItem: DialogErrorComponent;
  @ViewChild('dialogLoading') dialogLoading: LoadingComponent;
  formData: FormGroup;
  response: OrdersResponse
  id: string;
  isDisabled: boolean=false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ordersTransformService: OrdersTransformService,
    private ordersCrudService: OrdersCrudService
  ) {
    this.declareForm();
   }

  declareForm():void{
    this.formData = this.fb.group({
      folio:[,[Validators.required]],
      product:[,[Validators.required]],
      amount:[,[Validators.required]],
    })
  }
  ngAfterViewInit():void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params["id"];
        console.log(params["id"])
        this.getItem(this.id);
      }
    );
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
    const form: OrdersFormModel = this.formData.getRawValue();
    // let request:OrdersFormModel = {
    //   product:this.formData.value.product,
    //   amount:this.formData.value.amount,
    //   folio:this.formData.value.folio,
    //   id:this.formData.value.id

    // }

    // const form = this.formData.getRawValue();
    const request =this.ordersTransformService.toInventoryFormModel(form)
    const partialRequest = Utils.updatePartial(request);

    this.ordersCrudService.update(partialRequest,this.id).subscribe(
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
    this.ordersCrudService.getOne(id).subscribe(
      (resp) => {
        this.response=resp;
        const form = this.ordersTransformService.toInventoryFormModel(resp);
        this.formData.patchValue(form);
        // this.formData.patchValue({
        //   product:this.response.product,
        //   folio:this.response.folio,
        //   amount:this.response.amount,

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
