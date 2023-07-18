import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryTransformService } from '../services/inventory-transform.service';
import { InventoryCrudService } from 'src/app/shared/services/inventory/inventory-crud.service';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { InventoryFormModel } from '../models/inventoryFormModel';
import { CreateInventoryDto } from 'src/app/shared/services/inventory/requests/createInventoryDto';

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
    private inventoryTransformService: InventoryTransformService,
    private inventoryCrudService: InventoryCrudService
  ) {
    this.declareForm();
  }

  declareForm():void{
    this.formData = this.fb.group({
      wareh:[,[Validators.required]],
      shelf:[,[Validators.required]],
      rawMaterial_:[,[Validators.required]],
      // idpackage:[,[Validators.required]],
      dateOfExpiry:[,[Validators.required]],
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

    const form: InventoryFormModel = this.formData.getRawValue();
    const createInventoryDto: CreateInventoryDto = this.inventoryTransformService.toCreateInventoryDto(form);



    this.inventoryCrudService.create(createInventoryDto).subscribe(
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
