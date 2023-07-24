import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { ProductsTransformService } from '../services/products-transform.service';
import { ProductsCrudService } from '@shared/services/products/products-crud.service';
import { ProductsFormModel } from '../models/productsFormModel';
import { CreateProductsDto } from '@shared/services/products/requests/createProductsDto';

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
    private productsTransformService: ProductsTransformService,
    private productsCrudService: ProductsCrudService
  ) {
    this.declareForm();
  }

  declareForm():void{
    this.formData = this.fb.group({
      name:[,[Validators.required]],
      rawMaterial:[,[Validators.required]],
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

    const form: ProductsFormModel = this.formData.getRawValue();
    const createInventoryDto: CreateProductsDto = this.productsTransformService.toCreateProductsDto(form);

    let request:ProductsFormModel = {
      name:this.formData.value.name,
      recipeId:this.formData.value.recipeId
      // id:this.formData.value.id
    }

    this.productsCrudService.create(request).subscribe(
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
