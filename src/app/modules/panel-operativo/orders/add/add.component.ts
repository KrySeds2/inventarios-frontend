import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdersTransformService } from '../services/orders-transform.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersCrudService } from 'src/app/shared/services/orders/orders-crud.service';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { ProductsFormModel } from '../../products/models/productsFormModel';
import { CreateProductsDto } from '@shared/services/products/requests/createProductsDto';
import { OrdersFormModel } from '../models/ordersFormModel';
import { CreateOrdersDto } from '@shared/services/orders/requests/createOrdersDto';

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

  ngOnInit(): void {
  }

  submit(){
    console.log(this.formData.value);

    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
    this.dialogLoading.setDisplay(true);
    this.isDisabled = true;

    const form: OrdersFormModel = this.formData.getRawValue();
    const createInventoryDto: CreateOrdersDto = this.ordersTransformService.toCreateInventoryDto(form);


    this.ordersCrudService.create(createInventoryDto).subscribe(
      (response: any) => {
        this.dialogLoading.setDisplay(false);
        this.dialogSuccess.setDisplay(true, response);
        this.isDisabled = false;
      }, (error) => {
        this.dialogLoading.setDisplay(false);
        this.dialogError.setDisplay(true, error);
        this.isDisabled = false;
      }
    );
  }

  back(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
